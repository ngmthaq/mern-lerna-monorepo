import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { DevtoolsModule } from "@nestjs/devtools-integration";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ScheduleModule } from "@nestjs/schedule";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import configuration from "./configuration";
import { PrismaService } from "./prisma";

// https://docs.nestjs.com/techniques/configuration
const configModule = ConfigModule.forRoot({
  isGlobal: true,
  load: [configuration],
});

// https://docs.nestjs.com/techniques/task-scheduling
const scheduleModule = ScheduleModule.forRoot();

// https://docs.nestjs.com/techniques/events
const eventsModule = EventEmitterModule.forRoot();

// https://docs.nestjs.com/techniques/queues
BullModule.registerQueue({ name: "default" });
const queuesModule =
  process.env.REDIS_ENABLE === "true"
    ? BullModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          connection: {
            host: configService.get<string>("redis.host"),
            port: configService.get<number>("redis.port"),
          },
        }),
      })
    : undefined;

// https://docs.nestjs.com/security/rate-limiting
const throttlerModule =
  process.env.NODE_ENV === "production"
    ? ThrottlerModule.forRoot({
        throttlers: [
          { name: "short", ttl: 1000, limit: 3 },
          { name: "medium", ttl: 10000, limit: 20 },
          { name: "long", ttl: 60000, limit: 100 },
        ],
      })
    : undefined;
const throttlerGuard =
  process.env.NODE_ENV === "production"
    ? { provide: APP_GUARD, useClass: ThrottlerGuard }
    : undefined;

// https://docs.nestjs.com/devtools/overview
const devtoolsModule =
  process.env.NODE_ENV !== "production"
    ? DevtoolsModule.register({ http: true })
    : undefined;

// Core modules
const CORE_MODULES = [
  configModule,
  scheduleModule,
  eventsModule,
  queuesModule,
  throttlerModule,
  devtoolsModule,
].filter((module) => module !== undefined);

// Core providers
const CORE_PROVIDERS = [throttlerGuard, PrismaService, AppService].filter(
  (provider) => provider !== undefined,
);

@Module({
  imports: [...CORE_MODULES],
  providers: [...CORE_PROVIDERS],
  controllers: [AppController],
})
export class AppModule {}

import { join } from "node:path";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule } from "@nestjs/swagger";
import compression from "compression";
import cookieParser from "cookie-parser";
import session, { SessionOptions } from "express-session";
import helmet from "helmet";
import { AppModule } from "./app.module";
import swagger from "./swagger";

async function bootstrap() {
  // Create the Nest application
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    snapshot: true,
  });

  // https://docs.nestjs.com/techniques/versioning
  app.enableVersioning({
    type: VersioningType.HEADER,
    header: "X-API-Version",
    defaultVersion: "1",
  });

  // Get the ConfigService
  const configService = app.get(ConfigService);

  // https://docs.nestjs.com/security/cors
  app.enableCors();

  // https://docs.nestjs.com/security/helmet
  app.use(helmet());

  // https://docs.nestjs.com/techniques/validation
  const validationPipe = new ValidationPipe({
    whitelist: true,
    transform: true,
  });
  app.useGlobalPipes(validationPipe);

  // https://docs.nestjs.com/techniques/session
  const secret = configService.get<string>("secret")!;
  const sessionOptions: SessionOptions = {
    secret,
    resave: false,
    saveUninitialized: false,
  };
  app.use(session(sessionOptions));

  // https://docs.nestjs.com/techniques/cookies
  app.use(cookieParser());

  // https://docs.nestjs.com/techniques/compression
  app.use(compression());

  // https://docs.nestjs.com/techniques/mvc
  app.useStaticAssets(join(__dirname, "..", "public"));

  // https://docs.nestjs.com/openapi/introduction
  const documentFactory = () => SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup("swagger", app, documentFactory);

  // Listen on the configured port
  app.enableShutdownHooks();
  const port = configService.get<number>("port")!;
  await app.listen(port);
}

void bootstrap();

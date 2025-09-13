import { Controller, Get, VERSION_NEUTRAL } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller({
  version: VERSION_NEUTRAL,
})
export class AppController {
  public constructor(private readonly appService: AppService) {}

  @Get("/")
  public getHello() {
    return this.appService.getHello();
  }
}

import { DocumentBuilder } from "@nestjs/swagger";

const swagger = new DocumentBuilder()
  .setTitle("Cats example")
  .setDescription("The cats API description")
  .setVersion("1.0")
  .addTag("cats")
  .build();

export default swagger;

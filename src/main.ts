import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();  //linea necesaria para el header. Googlead CORS

  await app.listen(3000);

}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsFilter } from 'src/common/exceptions-filter/exceptions-filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();  //linea necesaria para el header. Googlead CORS
  app.useGlobalFilters(new ExceptionsFilter());

  await app.listen(3000);

}
bootstrap();

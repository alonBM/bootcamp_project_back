import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionsFilter } from 'src/common/exceptions-filter/exceptions-filter'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors();  //linea necesaria para el header. Googlead CORS
  app.useGlobalFilters(new ExceptionsFilter());

  const options = new DocumentBuilder()
    .setTitle('API documentation')
    .setDescription('API documentation for the application.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: [
        'http://localhost:3001',
        /^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):3001$/,
      ],
    },
  });
  app.enableCors({
    origin: [
      'http://localhost:3001',
      /^http:\/\/192\.168\.1\.([1-9]|[1-9]\d):3001$/,
    ],
  });
  await app.listen(3000);
}
bootstrap();

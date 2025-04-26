import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)
  const allowedOrigins = configService.get<string>('ALLOWED_ORIGINS')
  const allowedOriginsArray = allowedOrigins.split(',')
  const allowedOrigin = allowedOriginsArray.length > 0 ? allowedOriginsArray : ['http://localhost:4200']

  app.enableCors({
    origin: allowedOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })

  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  const port = parseInt(process.env.SERVER_PORT) || 3009
  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}, allowed origin: ${allowedOrigin}`,
  )
}

bootstrap()

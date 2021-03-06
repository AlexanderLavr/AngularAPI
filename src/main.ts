import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import conf from './config/config'
import { ExceptionHandlerFilter } from './exception';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';


async function bootstrap() {


  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(morgan('dev'));
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());
  app.useGlobalFilters(new ExceptionHandlerFilter)

  await app.listen(conf.PORT);
  console.log(`Server is leasning on PORT  :  ${conf.PORT}`);
}
bootstrap();

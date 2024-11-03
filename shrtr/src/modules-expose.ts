import { DynamicModule, ForwardReference, Type } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LinksModule } from './modules/links/links.module';
import { connectionName } from './mongoose-connection';

export const moduleList: (
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>
)[] = [
  MongooseModule.forRoot(process.env.MONGO_URI_SHRTR ?? process.env.MONGO_URI, {
    connectionName,
  }),
  LinksModule,
];

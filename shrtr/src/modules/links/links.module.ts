import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './link.entity';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import { connectionName } from '../../mongoose-connection';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Link.name, schema: LinkSchema }],
      connectionName,
    ),
  ],
  providers: [LinksService],
  controllers: [LinksController],
  exports: [],
})
export class LinksModule {}

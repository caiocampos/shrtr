import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type LinkDocument = Link & Document<Types.ObjectId>;

@Schema({ collection: 'link' })
export class Link {
  @Prop({ required: true, type: String })
  shrt: string;

  @Prop({ required: true, type: String })
  link: string;
}

export const LinkSchema = SchemaFactory.createForClass(Link);

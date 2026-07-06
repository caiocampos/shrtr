import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export class LinkAddRequestDTO {
  @IsString()
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  link!: string;

  @IsString()
  @IsOptional()
  shrt?: string;
}

import { IsNotEmpty, IsOptional } from 'class-validator';
import { ValidationMessages } from '../../../common/messages/validation-messages.constants';

export default class LinkAddRequestDTO {
  @IsNotEmpty({ message: ValidationMessages.IS_NOT_EMPTY })
  link: string;

  @IsOptional()
  shrt?: string;
}

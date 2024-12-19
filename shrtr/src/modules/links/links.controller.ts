import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  Param,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LinksService } from './links.service';
import LinkResponseDTO from './dto/link-response.dto';
import LinkAddRequestDTO from './dto/link-add-request.dto';
import { ApiResponse } from '../../common/interfaces/http-interfaces';

@Controller('links')
export class LinksController {
  private readonly logger = new Logger(LinksController.name);

  constructor(private linksService: LinksService) {}

  @Get()
  findAll(): Promise<Array<LinkResponseDTO>> {
    return this.linksService.findAll();
  }

  @Get('@/:shrt')
  async find(
    @Res() response: ApiResponse,
    @Param('shrt') shrt: string,
  ): Promise<void> {
    const redirectToError = () =>
      response.status(302).redirect(`${process.env.SHRTR_HOME}?error`);
    try {
      const data = await this.linksService.findOneByShrt(shrt);
      if (data.link !== undefined) {
        let { link } = data;
        link = /https?:\/\//.test(link) ? link : `http://${link}`;
        response.status(302).redirect(link);
        return;
      }
      this.logger.error('Not found');
      redirectToError();
      return;
    } catch (err) {
      this.logger.error(err);
      redirectToError();
    }
  }

  @Get('count')
  async count(): Promise<number> {
    try {
      return await this.linksService.count();
    } catch (err) {
      this.logger.error(err);
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  async add(@Body() requestDto: LinkAddRequestDTO): Promise<LinkResponseDTO> {
    try {
      const result = await this.linksService.generate(requestDto);
      return result;
    } catch (err) {
      this.logger.error(err);
      throw new HttpException((err as Error).message, HttpStatus.BAD_REQUEST);
    }
  }
}

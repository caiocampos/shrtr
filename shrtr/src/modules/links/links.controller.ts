import { Controller, Post, Get, Body, Res, Param } from '@nestjs/common';
import { LinksService } from './links.service';
import LinkResponseDTO from './dto/link-response.dto';
import LinkAddRequestDTO from './dto/link-add-request.dto';
import { Response } from 'express';

@Controller('links')
export class LinksController {
  constructor(private linksService: LinksService) {}

  @Get()
  findAll(): Promise<Array<LinkResponseDTO>> {
    return this.linksService.findAll();
  }

  @Get('@/:shrt')
  async find(
    @Res() response: Response,
    @Param('shrt') shrt: string,
  ): Promise<void> {
    const redirectToError = () =>
      response.redirect(`${process.env.SHRTR_HOME}?error`);
    try {
      const data = await this.linksService.findOneByShrt(shrt);
      if (data.link !== undefined) {
        let { link } = data;
        link = /https?:\/\//.test(link) ? link : `http://${link}`;
        response.redirect(link);
        return;
      }
      redirectToError();
      return;
    } catch (err) {
      console.error(err);
      redirectToError();
    }
  }

  @Get('count')
  count(): Promise<number> {
    return this.linksService.count();
  }

  @Post()
  add(@Body() requestDto: LinkAddRequestDTO): Promise<LinkResponseDTO> {
    return this.linksService.generate(requestDto);
  }
}

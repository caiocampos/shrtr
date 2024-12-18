import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, RootFilterQuery, Types } from 'mongoose';
import { Link, LinkDocument } from './link.entity';
import LinkResponseDTO from './dto/link-response.dto';
import LinkAddRequestDTO from './dto/link-add-request.dto';
import { connectionName } from '../../mongoose-connection';

const { ObjectId } = Types;

@Injectable()
export class LinksService {
  private readonly logger = new Logger(LinksService.name);

  constructor(
    @InjectModel(Link.name, connectionName)
    private linkModel: Model<LinkDocument>,
  ) {}

  async findOneByShrt(shrt: string): Promise<LinkResponseDTO> {
    try {
      const link = await this.linkModel.findOne({ shrt }).exec();
      return LinkResponseDTO.from(link);
    } catch (error) {
      throw new HttpException('Error finding the link', HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string): Promise<LinkResponseDTO> {
    try {
      const _id = new ObjectId(id);
      const link = await this.linkModel.findById(_id).exec();
      return LinkResponseDTO.from(link);
    } catch (error) {
      throw new HttpException('Error finding the link', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(): Promise<Array<LinkResponseDTO>> {
    try {
      const links = await this.linkModel.find().exec();
      return links.map(LinkResponseDTO.from);
    } catch (error) {
      throw new HttpException('Error finding links', HttpStatus.BAD_REQUEST);
    }
  }

  async existsByShrt(shrt: string): Promise<boolean> {
    return await this.exists({ shrt });
  }

  async exists(query: RootFilterQuery<LinkDocument>): Promise<boolean> {
    try {
      return (await this.linkModel.exists(query))._id !== undefined;
    } catch (error) {
      throw new HttpException(
        'Error validating existence of the link',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async count(): Promise<number> {
    try {
      return await this.linkModel.countDocuments().exec();
    } catch (error) {
      throw new HttpException('Error counting links', HttpStatus.BAD_REQUEST);
    }
  }

  private async add(requestDto: LinkAddRequestDTO): Promise<LinkResponseDTO> {
    try {
      const newLink = new this.linkModel();
      newLink.link = requestDto.link;
      newLink.shrt = requestDto.shrt;
      const link = await newLink.save();
      return LinkResponseDTO.from(link);
    } catch (error) {
      throw new HttpException(
        'Error recording the link',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async generate(
    requestDto: LinkAddRequestDTO,
    recursion = false,
  ): Promise<LinkResponseDTO> {
    const regenerate = () => {
      const shrt = (Math.random() * 9007199254740991)
        .toString(36)
        .replace('.', 'A');
      return this.generate({ ...requestDto, shrt }, true);
    };
    try {
      if (requestDto.shrt !== undefined && requestDto.shrt.length > 0) {
        const exists = await this.existsByShrt(requestDto.shrt);
        if (exists) {
          if (recursion) {
            return regenerate();
          }
          return Promise.reject(
            new HttpException(
              'The alias already exists, please try another',
              HttpStatus.BAD_REQUEST,
            ),
          );
        }
        return this.add(requestDto);
      }
    } catch (error) {
      throw new HttpException(
        'Error recording the link',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

import { LinkDocument } from '../link.entity';

export default class LinkResponseDTO {
  constructor(
    public id: string,
    public link: string,
    public shrt: string,
  ) {}

  static from = ({ _id, link, shrt }: LinkDocument): LinkResponseDTO =>
    new LinkResponseDTO(_id.toHexString(), link, shrt);
}

import {Game} from "../model/Game";

interface ICreateGameDTO {
  title: string,
  bannerUrl: string
}

interface IGamesRepository {
  list(): Game[];
  create({title, bannerUrl}:ICreateGameDTO): void;
}

export {ICreateGameDTO, IGamesRepository}

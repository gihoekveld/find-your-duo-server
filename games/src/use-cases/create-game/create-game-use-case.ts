import {IGamesRepository} from "../../repositories/IGamesRepository";

interface IRequest {
  title: string,
  bannerUrl: string
}

class CreateGameUseCase {
  constructor(private gamesRepository: IGamesRepository) {}

  execute({title, bannerUrl}: IRequest): void {
    this.gamesRepository.create({title, bannerUrl});
  }
}

export {CreateGameUseCase};

import { Game } from "../../model/Game"
import { IGamesRepository } from "../../repositories/IGamesRepository";

class ListGamesUseCase {
  constructor(private gamesRepository: IGamesRepository) {}

  execute(): Game[] {
    const games = this.gamesRepository.list();

    return games;
  }
}

export { ListGamesUseCase };

import { Game } from '../../model/Game'
import { ICreateGameDTO, IGamesRepository } from '../IGamesRepository'

class GamesRepository implements IGamesRepository {
  private games: Game[];

  private static INSTANCE: GamesRepository;

  private constructor() {
    this.games = [];
  }

  public static getInstance(): GamesRepository {
    if (!GamesRepository.INSTANCE) {
      GamesRepository.INSTANCE = new GamesRepository();
    }
    return GamesRepository.INSTANCE;
  }

  list(): Game[] {
    // TODO Twitch API
    return this.games;
  }

  create({ title, bannerUrl }: ICreateGameDTO): void {
    const game = new Game();

    Object.assign(game, {
      title,
      bannerUrl
    })

    this.games.push(game);
  }
}

export { GamesRepository }
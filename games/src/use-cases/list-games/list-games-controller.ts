import {Request} from 'itty-router'
import {ListGamesUseCase} from "./list-games-use-case";

class ListGamesController {
  constructor(private listGamesUseCase: ListGamesUseCase) {}

  handle(request: Request): Response {
    const games = this.listGamesUseCase.execute();

    return new Response(JSON.stringify({
      games
    }))
  }
}

export {ListGamesController}

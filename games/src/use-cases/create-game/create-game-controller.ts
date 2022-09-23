import {Request} from "itty-router"

import {CreateGameUseCase} from "./create-game-use-case"

class CreateGameController {
  constructor(private createGameUseCase: CreateGameUseCase) {}

  async handle(request: Request) {
    const {title, bannerUrl} = await request.json();

    this.createGameUseCase.execute({title, bannerUrl});

    return new Response(JSON.stringify({
      message: "game created."
    }), {status: 200});
  }
}

export {CreateGameController};

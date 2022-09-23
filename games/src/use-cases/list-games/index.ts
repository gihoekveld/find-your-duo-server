import { GamesRepository } from "../../repositories/implementations/GamesRepository";
import { ListGamesController } from "./list-games-controller";
import { ListGamesUseCase } from "./list-games-use-case";

const gamesRepository = GamesRepository.getInstance();

const listGamesUseCase = new ListGamesUseCase(gamesRepository);

const listGamesController = new ListGamesController(listGamesUseCase);

export { listGamesController };

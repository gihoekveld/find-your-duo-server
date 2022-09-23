import {GamesRepository} from "../../repositories/implementations/GamesRepository";
import {CreateGameUseCase} from "./create-game-use-case";
import {CreateGameController} from "../create-game/create-game-controller";

const gamesRepository = GamesRepository.getInstance();

const createGameUseCase = new CreateGameUseCase(gamesRepository);

const createGameController = new CreateGameController(createGameUseCase);

export {createGameController};

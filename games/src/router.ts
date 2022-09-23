import {Router as ittyRouter} from 'itty-router'
import { createGameController } from './use-cases/create-game';
import { listGamesController } from './use-cases/list-games';

const router = ittyRouter()

router
  .get('/games', request => listGamesController.handle(request))
  .post('/games', request => createGameController.handle(request))
  .all('*', () => notFound())

const notFound = () => {

  return new Response("API route not found!", {status: 404});
}

export const Router = (request: Request):Promise<Response> => 
  router.handle(request)
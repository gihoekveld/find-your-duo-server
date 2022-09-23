import {v4 as uuidV4} from "uuid";

class Game {
  id?: string;
  title: string;
  bannerUrl: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export {Game};

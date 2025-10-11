import { SeasonsService } from "../service/SeasonsService.js";
import { SeasonsAPIAdapter } from "../adapter/SeasonsAPIAdapter.js";
import type { SeasonDTO } from "../DTO/SeasonDTO.js";

export class SeasonController {
  seasonsAdapter: SeasonsAPIAdapter;
  SeasonsService: SeasonsService;
  constructor() {
    this.seasonsAdapter = new SeasonsAPIAdapter();
    this.SeasonsService = new SeasonsService();
  }

  getSeasons = async () => {
    return await this.seasonsAdapter.fetchSeasons();
  };
  getCurrentSeason(seasons: SeasonDTO[]) {
    return this.SeasonsService.findCurrentSeasons(seasons);
  }
}

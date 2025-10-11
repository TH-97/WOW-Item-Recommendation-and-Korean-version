import type { SeasonDTO } from "./../DTO/SeasonDTO.js";
export class SeasonsService {
  async findCurrentSeasons(seasons: SeasonDTO[]) {
    const data = seasons.find((season) => season.seasonId === 45);
    return data;
  }
}

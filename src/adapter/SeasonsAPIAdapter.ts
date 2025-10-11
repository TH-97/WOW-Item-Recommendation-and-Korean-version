import axios from "axios";
import type { SeasonDTO } from "../DTO/SeasonDTO.js";
import { LOGS_API_KEY } from "../config/evn.js";

export class SeasonsAPIAdapter {
  async fetchSeasons(): Promise<SeasonDTO[]> {
    try {
      const response = await axios.get(
        "https://www.warcraftlogs.com/v1/zones?",
        {
          params: { api_key: LOGS_API_KEY },
        }
      );
      const apiData = response.data;

      const seasons: SeasonDTO[] = apiData.map((zone: any) => ({
        seasonId: zone.id,
        encounters: zone.encounters.map((dungeon: any) => ({
          dungeonId: dungeon.id,
          dungeonName: dungeon.name,
        })),
      }));

      return seasons;
    } catch (error) {
      console.error("Dungeon API fetch error:", error);
      return [];
    }
  }
}

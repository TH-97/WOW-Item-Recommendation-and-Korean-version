import type { DungeonDTO } from "./DungeonDTO.js";

export interface SeasonDTO {
  seasonId: number;
  encounters: DungeonDTO[];
}

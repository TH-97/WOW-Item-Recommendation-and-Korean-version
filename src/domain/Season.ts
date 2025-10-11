// Season.ts
import { Dungeon } from "./Dungeon.js";

export class Season {
  constructor(
    private readonly seasonId: number,
    private readonly encounters: Dungeon[]
  ) {}

  getSeasonId(): number {
    return this.seasonId;
  }

  getEncounters(): Dungeon[] {
    return this.encounters;
  }
}

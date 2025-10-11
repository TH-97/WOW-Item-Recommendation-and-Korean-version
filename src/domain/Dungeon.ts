// Dungeon.ts
export class Dungeon {
  constructor(private readonly id: number, private readonly name: string) {}

  getDungeonId(): number {
    return this.id;
  }

  getDungeonName(): string {
    return this.name;
  }
}

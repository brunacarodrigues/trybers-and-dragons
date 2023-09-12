import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter;
  private _monster: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._character = player;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      this._character.attack(monster);
      monster.attack(this._character);
    });

    if (this._character.lifePoints >= 0
      || this._monster.every((monster) =>
        monster.lifePoints >= 0)) {
      return super.fight();
    }
    return this.fight();
  }
}

export default PVE;
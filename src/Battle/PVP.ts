import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player2: Fighter;

  constructor(player: Fighter, player2: Fighter) {
    super(player);
    this._player2 = player2;
  }

  fight(): number {
    this.player.attack(this._player2);
    this._player2.attack(this.player);

    if (this.player.lifePoints < 0 || this._player2.lifePoints < 0) {
      return super.fight();
    }
    return this.fight();
  }
}

export default PVP;
import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _countNumAdd = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._countNumAdd += +1;
  }

  static createdRacesInstances(): number {
    return this._countNumAdd;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
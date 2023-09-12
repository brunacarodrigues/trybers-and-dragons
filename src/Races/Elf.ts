import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _countNumAdd = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countNumAdd += +1;
  }

  static createdRacesInstances(): number {
    return this._countNumAdd;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
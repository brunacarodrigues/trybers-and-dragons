import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  energyType: EnergyType;
  private static _countNumAdd = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior._countNumAdd += +1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._countNumAdd;
  }
}

export default Warrior;
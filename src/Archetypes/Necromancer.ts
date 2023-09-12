import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  energyType: EnergyType;
  private static _countNumAdd = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer._countNumAdd += +1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._countNumAdd;
  }
}

export default Necromancer;
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  energyType: EnergyType;
  private static _countNumAdd = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage._countNumAdd += +1;
  }

  static createdArchetypeInstances(): number {
    return Mage._countNumAdd;
  }
}

export default Mage;
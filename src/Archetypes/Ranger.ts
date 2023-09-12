import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  energyType: EnergyType;
  private static _countNumAdd = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger._countNumAdd += +1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._countNumAdd;
  }
}

export default Ranger;
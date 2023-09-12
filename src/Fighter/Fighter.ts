import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export type EnergyType = 'mana' | 'stamina';

interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter): void;
  levelUp(): void;
}

export default Fighter;

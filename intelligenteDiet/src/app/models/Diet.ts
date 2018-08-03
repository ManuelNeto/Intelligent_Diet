import {Alimento} from './Alimento';

export class Diet {
  constructor(public breakfast: Alimento[],
              public lunch: Alimento[],
              public dinner: Alimento[],
              public snack: Alimento[]) {}
}

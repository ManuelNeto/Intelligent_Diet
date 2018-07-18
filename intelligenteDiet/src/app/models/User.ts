import {Diet} from './Diet';

export class User {
  constructor(public gender: string,
              public age: number,
              public height: number,
              public weight: number,
              public goal: number,
              public diet: Diet[],
              public levelOfPhysicalActivity: string,
              public totalDailyCalories: number) {}
}

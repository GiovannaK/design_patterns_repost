import { MealCompositeProtocol } from '../interfaces/meal-compositite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((item) => this._children.push(item));
  }

  remove(meal: MealCompositeProtocol): void {
    const mealIndex = this._children.indexOf(meal);
    if (mealIndex !== -1) this._children.splice(mealIndex, 1);
  }
}

import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 5);
    const meat = new Meat('Carne', 5);
    this.mealBox.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 5);
    this.mealBox.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 5);
    this.mealBox.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this.mealBox;
  }
  private mealBox: MealBox = new MealBox();
  reset(): this {
    this.mealBox = new MealBox();
    return this;
  }
}

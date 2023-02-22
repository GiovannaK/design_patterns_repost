import { MainDishBuilder } from './classes/main-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();
console.log(mainDishBuilder.getMeal());

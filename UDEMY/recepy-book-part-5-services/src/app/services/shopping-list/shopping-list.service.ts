import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Ingredient 1', 10),
    new Ingredient('Ingredient 2', 20),
    new Ingredient('Ingredient 3', 30),
    new Ingredient('Ingredient 4', 40),
    new Ingredient('Ingredient 5', 50),
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient) {
    let curentIndex = -1;
    for (let index = 0; index < this.ingredients.length; index++) {
      if (this.ingredients[index].name === ingredient.name) {
        curentIndex = index;
        break;
      }
    }
    if (curentIndex >= 0) this.ingredients.splice(curentIndex, 1);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  clearIngredients() {
    this.ingredients = [];
    this.ingredientChanged.emit(this.ingredients);
  }
}

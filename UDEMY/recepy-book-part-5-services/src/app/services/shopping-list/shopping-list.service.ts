import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Ingedient 1', 10),
        new Ingredient('Ingedient 2', 20),
        new Ingredient('Ingedient 3', 30),
        new Ingredient('Ingedient 4', 40),
        new Ingredient('Ingedient 5', 50),
      ];
}
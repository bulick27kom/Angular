import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('Ingedient 1', 10),
    new Ingredient('Ingedient 2', 20),
    new Ingredient('Ingedient 3', 30),
    new Ingredient('Ingedient 4', 40),
    new Ingredient('Ingedient 5', 50),
  ];
}

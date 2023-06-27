import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [],
})
export class ShoppingList implements OnInit {
  ingredients: Ingredient[] = [];
  selectedIngredient: Ingredient = new Ingredient('', 0);

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanged.subscribe(
      (ingredients) => (this.ingredients = ingredients)
    );
  }

  onSelectIngredient(ingredientClicked: Ingredient) {
    this.selectedIngredient = ingredientClicked;
  }
}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingList implements OnInit{


  ingredients: Ingredient[] = [];
  constructor(private shoppingListService:ShoppingListService){
  }

  ngOnInit(): void {
      this.ingredients = this.shoppingListService.ingredients;
  }

  ingredientElementClicked = new Ingredient('', 0);

  onAddingredient(ingredien: Ingredient) {
    if (ingredien.name !== '' && ingredien.amount !== 0) {
      this.ingredients.push(ingredien);
    }
  }
  onClearIngredients() {
    this.ingredients = [];
  }

  onIngredientClick(ingredien: Ingredient) {
    this.ingredientElementClicked = ingredien;
  }

  onDeleteIngredient(ingredientToDel: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredientToDel), 1);
    console.log(this.ingredients);
  }
}

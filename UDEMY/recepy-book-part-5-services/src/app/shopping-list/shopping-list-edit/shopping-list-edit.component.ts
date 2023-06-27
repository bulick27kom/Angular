import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEdit {
  constructor(private shoppingListService: ShoppingListService) {}

  @Input() ingredientClicked: Ingredient = new Ingredient('', 0);

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = !isNaN(
      Number(this.amountInputRef.nativeElement.value)
    )
      ? Number(this.amountInputRef.nativeElement.value)
      : 0;

    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    if (ingredient.name != '')
      this.shoppingListService.addIngredient(ingredient);
  }

  onClearIngredients() {
    this.shoppingListService.clearIngredients();
  }

  onDeleteIngredient() {
    if (
      this.ingredientClicked.name === '' &&
      this.ingredientClicked.amount === 0
    )
      return;
    else {
      this.shoppingListService.deleteIngredient(this.ingredientClicked);
    }
  }
}

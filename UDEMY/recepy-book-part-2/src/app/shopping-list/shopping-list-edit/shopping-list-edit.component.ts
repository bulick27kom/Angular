import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEdit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() clearIngredients = new EventEmitter<void>();
  @Output() deleteIngredient = new EventEmitter<Ingredient>();
  @Input() ingredientClicked = new Ingredient('', 0);

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

    this.addIngredient.emit(ingredient);
  }

  onClearIngredients() {
    this.clearIngredients.emit();
  }

  onDeleteIngredient() {
    if (
      this.ingredientClicked.name === '' &&
      this.ingredientClicked.amount === 0
    )
      return;
    else {
      this.deleteIngredient.emit(this.ingredientClicked);
    }
  }
}

import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recepies: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Description of the Recipe 1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
    ),
    new Recipe(
      'Recipe 2',
      'Description of the Recipe 2',
      'https://www.cookipedia.co.uk/wiki/images/e/e2/Tunisian_beef_pie_and_gravy.jpg'
    ),
    new Recipe(
      'Recipe 3',
      'Description of the Recipe 3',
      'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg'
    ),
    new Recipe(
      'Recipe 4',
      'Description of the Recipe 4',
      'https://images.squarespace-cdn.com/content/v1/5190d201e4b0e86c59643db1/4199a15b-4eb2-4d60-b5dc-2831e47b8b8f/frbreakfast_vegan_healthy_eat-image-kybe8oy8.jpg'
    ),
  ];
}

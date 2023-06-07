import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingList } from './shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEdit } from './shopping-list/shopping-list-edit/shopping-llist-edit.component';
import { RecipeListComponent } from './recipe-book/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipes/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe-book/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingList,
    ShoppingListEdit,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipesComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

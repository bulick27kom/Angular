import { Component } from '@angular/core';
import { ShoppingListService } from './services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  constructor(private shoppingListService: ShoppingListService){
    
  }
  selectedMenuItem: string = 'recipe';
  onSelectMenuItem(menuItem: string) {
    this.selectedMenuItem = menuItem;
  }
}

import { Component } from '@angular/core';
import { ProductServise } from './services/product.service';
import { NavMenyItems } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductServise],
})
export class AppComponent {
  selectedMenuItem: NavMenyItems = 'Products';
  onChangeMenyItem(menuItem) {
    this.selectedMenuItem = menuItem;
  }
}

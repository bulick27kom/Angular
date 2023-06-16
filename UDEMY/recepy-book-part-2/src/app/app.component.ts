import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedMenuItem: string = 'recipe';
  onSelectMenuItem(menuItem: string) {
    this.selectedMenuItem = menuItem;
  }
}

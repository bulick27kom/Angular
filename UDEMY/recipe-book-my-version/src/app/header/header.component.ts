import { Component, EventEmitter, Output } from '@angular/core';
import { NavMenyItems } from '../shared/types';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
})
export class Header {
  @Output() menuItemChanged = new EventEmitter<NavMenyItems>();
  currentMenuItem: NavMenyItems = 'Products';

  onSelectMenuItem(event) {
    this.currentMenuItem = event.target.text;
    this.menuItemChanged.emit(this.currentMenuItem);
  }
}

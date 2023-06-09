import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() selectMenuItem = new EventEmitter<string>();

  onSelect(link: string) {
    this.selectMenuItem.emit(link);
  }
}

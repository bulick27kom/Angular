import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.btn-danger') isOpen = false;

  @HostListener('click') paintButton() {
    this.isOpen = !this.isOpen;
  }
}

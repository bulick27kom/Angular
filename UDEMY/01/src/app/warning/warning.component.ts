import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: ` <h4>Warning alert</h4> `,
  styles: [
    `
      h4 {
        color: blueviolet;
      }
    `,
  ],
})
export class WarningComponent {}

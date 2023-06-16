import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddArray: number[] = [];
  evenArray: number[] = [];

  onGcCounterChanged(event) {
    if (event % 2 === 0) {
      this.oddArray.push(event);
    } else {
      this.evenArray.push(event);
    }
  }
}

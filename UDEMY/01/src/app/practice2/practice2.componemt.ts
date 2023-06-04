import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.componemt.html',
  styles: [
    `
      .mainDiv {
        margin-top: 50px;
      }
    `,
  ],
})
export class Practice2Component {
  details = 'Display Details';
  detailsAreVisible: boolean = false;
  password = 'tuna';

  onShowDetails() {
    this.detailsAreVisible = !this.detailsAreVisible;
  }
}

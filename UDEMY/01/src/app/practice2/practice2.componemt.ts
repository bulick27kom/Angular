import { Component } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.componemt.html',
  styles: [
    `
      .white-text {
        color: white;
      }
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
  log: string[] = [];

  onShowDetails() {
    this.detailsAreVisible = !this.detailsAreVisible;
    const logMessage: string = `Button was pressed at ${new Date()}`;
    this.log.push(logMessage);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewSErver: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewSErver = true;
    }, 2000);
  }
}

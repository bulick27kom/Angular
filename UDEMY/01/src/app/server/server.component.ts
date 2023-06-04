import { Type } from '@angular/compiler';
import { Component } from '@angular/core';

//Type StatusServer = 'Online' | 'Offline';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: 'online' | 'offline' = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

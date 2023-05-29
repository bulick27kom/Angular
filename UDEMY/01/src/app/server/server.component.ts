import { Type } from '@angular/compiler';
import { Component } from '@angular/core';

//Type StatusServer = 'Online' | 'Offline';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: 'onlone' | 'offline' = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}

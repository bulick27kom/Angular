import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewSErver: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = 'Test server';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewSErver = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created`;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //newServerName = '';
  newServerContent = '';

  onAddServer(nameinput: HTMLInputElement) {
    // console.log(nameServer.value);

    this.serverCreated.emit({
      serverName: nameinput.value,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(nameinput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameinput.value,
      serverContent: this.newServerContent,
    });
  }
}

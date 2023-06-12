import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

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

  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

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

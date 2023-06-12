import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input('srvCounter') counter: number;
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanged called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }
}

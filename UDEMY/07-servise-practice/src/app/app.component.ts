import { Component, OnInit } from '@angular/core';
import { UsersServise } from './services/users/users.servise';
import { CounterServise } from './services/counter/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServise],
})
export class AppComponent implements OnInit {
  counter: CounterServise;
  constructor(private counterServise: CounterServise) {}

  ngOnInit() {
    this.counter = this.counterServise;
  }
}

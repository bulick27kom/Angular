import { Component, OnInit } from '@angular/core';
import { AutorizationService } from './services/autorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private autorizationServise: AutorizationService) {}

  ngOnInit(): void {
    this.autorizationServise.getTokenFromLocalStorage();
  }
}

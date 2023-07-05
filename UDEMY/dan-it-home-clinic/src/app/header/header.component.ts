import { Component } from '@angular/core';
import { AutorizationService } from '../services/autorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header {
  showLoginWindow: boolean = false;
  autorised: boolean;

  constructor(private autorizationServise: AutorizationService) {
    autorizationServise.autorizationStatusChanged.subscribe(() => {
      this.autorised = autorizationServise.autorized;
    });
  }

  onShowLoginWindow() {
    this.showLoginWindow = true;
  }

  onLogout() {
    this.autorizationServise.logout();
    this.showLoginWindow = false;
  }

  onloginFormClose() {
    console.log('showLoginWindow :>> ', this.showLoginWindow);
    this.showLoginWindow = false;
  }
}

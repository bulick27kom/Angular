import { EventEmitter } from '@angular/core';

export class AutorizationService {
  tokenUrl: string = 'https://ajax.test-danit.com/api/v2/cards/login';
  email: string = 'familyClinic@gmail.com';
  password: string = '123456';
  token: string = '';
  autorized: boolean = false;

  autorizationStatusChanged = new EventEmitter<boolean>();

  login(email: string, password: string): void {
    this.autorized = true;
    this.autorizationStatusChanged.emit(this.autorized);
    fetch(this.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.login, password: this.password }),
    });
  }

  logout() {
    this.autorized = false;
    this.autorizationStatusChanged.emit(this.autorized);
  }
}

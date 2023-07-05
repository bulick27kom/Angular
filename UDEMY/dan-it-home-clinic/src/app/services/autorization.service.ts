import { EventEmitter } from '@angular/core';

export class AutorizationService {
  tokenUrl: string = 'https://ajax.test-danit.com/api/v2/cards/login';
  // email: string = 'familyClinic@gmail.com';
  // password: string = '123456';
  token: string = '';
  autorized: boolean = false;

  autorizationStatusChanged = new EventEmitter<boolean>();

  login(email: string, password: string): void {
    //пробуем загшрузить токен с сервера
    try {
      fetch(this.tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            console.log('Authorization failed');
            return '';
          }
        })
        .then((token) => {
          if (token.length > 0) {
            this.token = token;
            this.autorized = true;
            this.autorizationStatusChanged.emit(this.autorized);
            localStorage.setItem('token', this.token);
          }
        });
    } catch (message) {
      console.log('Authorization failed :>> ', message);
    }
  }

  logout() {
    this.autorized = false;
    localStorage.removeItem('token');
    this.token = '';
    this.autorizationStatusChanged.emit(this.autorized);
  }

  getTokenFromLocalStorage(): void {
    const token = localStorage.getItem('token') ?? '';
    if (token.length > 0) {
      console.log(`Token ${this.token} has taken from local storage`);
      this.token = token;
      this.autorized = true;
      this.autorizationStatusChanged.emit(this.autorized);
      localStorage.setItem('token', this.token);
    }
  }
}

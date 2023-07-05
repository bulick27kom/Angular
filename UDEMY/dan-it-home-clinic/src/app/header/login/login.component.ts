import { Component, EventEmitter, Output } from '@angular/core';
import { AutorizationService } from 'src/app/services/autorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class Login {
  @Output() closeLoginForm = new EventEmitter<void>();
  autorized: boolean;
  email;
  password;
  constructor(private autorizationServise: AutorizationService) {
    this.autorized = autorizationServise.autorized;
    autorizationServise.autorizationStatusChanged.subscribe(() => {
      this.autorized = autorizationServise.autorized;
    });
  }

  onLogin() {
    this.autorizationServise.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  
  onCloseLoginWindow() {
    this.closeLoginForm.emit();
  }
}

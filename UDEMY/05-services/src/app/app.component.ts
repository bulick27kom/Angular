import { Component } from '@angular/core';
import { IAccount } from './shared/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accounts: IAccount[] = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  onAddNewAccount(account: IAccount) {
    this.accounts.push(account);
  }

  accountSatausChanged(account) {
    this.accounts.find((element) => {
      element.name === account.name;
    }).status = account.status;
  }
}

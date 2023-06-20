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
      status: 'unknown',
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
    console.log('accounts :>> ', this.accounts);
  }
}

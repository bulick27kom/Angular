import { Component } from '@angular/core';
import {
  IAccount,
  AccountStatus,
  AccountTypeGuard,
} from '../shared/account.model';
import { AccountsService } from '../services/accounts/accounts.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-account.component.html',
})
export class NewAccount {
  accountName: string = '';
  accountStatus: AccountStatus = 'unknown';

  constructor(private accountsService: AccountsService) {
    accountsService.statusUpdateEvent.subscribe();
  }

  onAddNewAccount() {
    const newAccount: IAccount = {
      name: this.accountName,
      status: AccountTypeGuard.accountStatusGuard(this.accountStatus),
    };
    this.accountsService.addNewAccount(newAccount);
  }
}

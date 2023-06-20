import { Component, Output, EventEmitter } from '@angular/core';
import { Account, AccountStatus } from '../shared/account.model';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-account.component.html',
})
export class NewAccount {
  accountName: string;
  accountStatus: AccountStatus;

  @Output() addNewAccount = new EventEmitter<Account>();

  onAddNewAccount() {
    const newAccount: Account = {
      name: this.accountName,
      status: this.accountStatusGuard(this.accountStatus),
    };
    this.addNewAccount.emit(newAccount);
    console.log('newAccount :>> ', newAccount);
  }

  private accountStatusGuard(status: string): AccountStatus {
    switch (status) {
      case 'active':
        return 'active';
        break;
      case 'inactive':
        return 'inactive';
        break;
      default:
        return 'unknown';
        break;
    }
  }
}

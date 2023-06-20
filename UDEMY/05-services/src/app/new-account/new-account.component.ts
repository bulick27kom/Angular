import { Component, Output, EventEmitter } from '@angular/core';
import {
  IAccount,
  AccountStatus,
  AccountTypeGuard,
} from '../shared/account.model';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-account.component.html',
})
export class NewAccount {
  accountName: string = '';
  accountStatus: AccountStatus = 'unknown';

  @Output() addNewAccount = new EventEmitter<IAccount>();

  onAddNewAccount() {
    const newAccount: IAccount = {
      name: this.accountName,
      status: AccountTypeGuard.accountStatusGuard(this.accountStatus),
    };
    this.addNewAccount.emit(newAccount);
  }
}

import { IAccount } from 'src/app/shared/account.model';
import { LoggingService } from '../logging/logging.service';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class AccountsService {
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

  @Output() statusUpdatedEvent = new EventEmitter<IAccount>();

  constructor(private loggingService: LoggingService) {}

  addNewAccount(account: IAccount) {
    this.accounts.push(account);
  }

  changeAccountStatus(account: IAccount) {
    const acc: IAccount = this.accounts.find((element) => {
      if (account.name === element.name) return true;
      else return false;
    });
    acc.status = account.status;
    this.loggingService.logStatusChange(acc);
  }
}

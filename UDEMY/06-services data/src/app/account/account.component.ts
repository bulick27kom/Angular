import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountTypeGuard, IAccount } from '../shared/account.model';
import { LoggingService } from '../services/logging/logging.service';
import { AccountsService } from '../services/accounts/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService],
})
export class Account {
  @Input() accountData: IAccount;

  constructor(
    private statusLogger: LoggingService,
    private accountsService: AccountsService
  ) {}

  onChangeStatus(status: string) {
    this.accountData.status = AccountTypeGuard.accountStatusGuard(status);
    this.accountsService.changeAccountStatus(this.accountData);
    this.accountsService.statusUpdatedEvent.emit(this.accountData);
    // this.statusLogger.logStatusChange(this.accountData);
  }
}

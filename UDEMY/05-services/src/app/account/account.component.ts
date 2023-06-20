import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountTypeGuard, IAccount } from '../shared/account.model';
import { LoggingService } from '../shared/logging/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  providers: [LoggingService],
})
export class Account {
  @Input() accountData: IAccount;
  @Output() accountStatusChanged = new EventEmitter<IAccount>();

  constructor(private statusLogger: LoggingService) {}

  onChangeStatus(status: string) {
    this.accountData.status = AccountTypeGuard.accountStatusGuard(status);
    this.accountStatusChanged.emit(this.accountData);
    this.statusLogger.logStatusChange(this.accountData);
  }
}

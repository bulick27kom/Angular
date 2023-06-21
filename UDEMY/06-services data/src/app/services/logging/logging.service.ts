import { IAccount } from '../../shared/account.model';

export class LoggingService {
  logStatusChange(account: IAccount) {
    console.log(
      `Account ${account.name} has changed status to ${account.status}`
    );
  }
}

export type AccountStatus = 'active' | 'inactive' | 'unknown';
export interface IAccount {
  name: string;
  status: AccountStatus;
}

export class AccountTypeGuard{
  public static accountStatusGuard(status: string): AccountStatus {
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


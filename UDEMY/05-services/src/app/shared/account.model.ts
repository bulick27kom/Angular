export type AccountStatus = 'active' | 'inactive' | 'unknown';
export interface IAccount {
  name: string;
  status: AccountStatus;
}

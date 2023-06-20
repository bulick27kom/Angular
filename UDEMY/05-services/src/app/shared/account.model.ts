export type AccountStatus = 'active' | 'inactive' | 'unknown';
export interface Account {
  name: string;
  status: AccountStatus;
}

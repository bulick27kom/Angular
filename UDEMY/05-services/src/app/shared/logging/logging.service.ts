import { IAccount } from "../account.model";

export class LoggingService{
    logStatusChange(account: IAccount){
        console.log(`Account ${account.name} has changed status to ${account.status}`);
    }
}
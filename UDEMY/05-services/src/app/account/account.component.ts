import {Component, Input } from '@angular/core'
import { IAccount } from '../shared/account.model'

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html'
})
export class Account{
  @Input() accountData: IAccount;

}



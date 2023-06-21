import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewAccount } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';
import { Account } from './account/account.component';
import { AccountsService } from './services/accounts/accounts.service';
import { LoggingService } from './services/logging/logging.service';

@NgModule({
  declarations: [AppComponent, NewAccount, Account],
  imports: [BrowserModule, FormsModule],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}

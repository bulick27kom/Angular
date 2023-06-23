import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsers } from 'src/app/active-users/active-users.component';
import { CounterServise } from './services/counter/counter.service';

@NgModule({
  declarations: [AppComponent, InactiveUsersComponent, ActiveUsers],
  imports: [BrowserModule],
  providers: [CounterServise],
  bootstrap: [AppComponent],
})
export class AppModule {}

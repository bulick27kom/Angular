import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewAccount } from './new-account/new-account.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NewAccount],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

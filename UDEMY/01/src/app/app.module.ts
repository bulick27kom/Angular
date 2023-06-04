import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AlertComponent } from './alert/alert.component';
import { WarningComponent } from './warning/warning.component';
import { FormsModule } from '@angular/forms';
import { Practice1Componemt } from './practice1/practice1.componemt';
import { Practice2Component } from './practice2/practice2.componemt';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertComponent,
    WarningComponent,
    Practice1Componemt,
    Practice2Component
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

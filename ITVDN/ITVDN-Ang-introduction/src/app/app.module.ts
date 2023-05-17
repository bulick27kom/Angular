import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, HelloComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, FirstComponent],
})
export class AppModule {}

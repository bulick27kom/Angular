import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';

@NgModule({
  declarations: [AppComponent, BasicHighLightDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Cards } from './cards/cards.component';
import { CardsService } from './services/cards.service';
import { Login } from './header/login/login.component';
import { AutorizationService } from './services/autorization.service';
import { FiltersComponent } from './cards/filters/filters.component';

@NgModule({
  declarations: [AppComponent, Header, Cards, Login, FiltersComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CardsService, AutorizationService],
  bootstrap: [AppComponent],
})
export class AppModule {}

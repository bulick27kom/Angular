import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { ProductList } from './product-list/product-list.component';
import { ProductDescrioption } from './product-list/product-description/product-description.component';

@NgModule({
  declarations: [AppComponent, Header, ProductList, ProductDescrioption],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

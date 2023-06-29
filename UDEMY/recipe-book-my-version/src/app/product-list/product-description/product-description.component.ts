import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/types';

@Component({
  selector: 'app-product-descrioprion',
  templateUrl: 'product-description.component.html',
})
export class ProductDescrioption {
  @Input()product: Product;
}

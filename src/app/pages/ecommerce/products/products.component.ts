import { Component, OnInit } from '@angular/core';

import { Options } from 'ng5-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Ecommerce products component
 */
export class ProductsComponent implements OnInit {

  breadCrumbItems: Array<{}>;

  pricevalue = 250;
  minVal = 100;
  maxVal = 800;
  priceoption: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
  };

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Ecommerce' }, { label: 'Product', active: true }];
  }


}

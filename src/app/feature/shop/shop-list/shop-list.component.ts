import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent {

  @Input() products:Product[] | null = [];

  max = 5;

  get steps(){
     const numSlice = (this.products && Math.ceil(this.products.length / this.max) ) || 1 ;
     const stepIterable = Array.from( Array(numSlice).keys() ).map(v => v * this.max );
     return stepIterable;
  }
  cursor = 0;

  get slicedProducts(){
      return this.products?.slice( this.cursor, this.cursor + this.max );
  }

}

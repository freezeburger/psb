import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.scss']
})
export class ShopListItemComponent implements OnInit {

  @Input() product : Product| null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

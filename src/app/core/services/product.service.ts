import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { ProductServer } from '../interfaces/product-server';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products$ = new BehaviorSubject<Product[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  load(): void {
    this.http.get<ProductServer[]>(environment.API_SHOP)
      .pipe(
        // Operators
        tap( console.table ),
        map(this.collectionFromServer),
        tap( console.table )
      )
      .subscribe(data => this.products$.next(data));
  }

  // Mapping Function
  // collectionFromServer.bind(this)
  collectionFromServer = (data: ProductServer[]): Product[] => {
    return data.map( this.productFromServer);
  }

  collectionToServer = (data: Product[]): ProductServer[] => {
    return data.map(this.productToServer);
  }

  productFromServer = (data: ProductServer): Product => {
    return ({
      id: data.id,
      image: data.filename,
      title: data.title,
      description: data.description,
      price: data.price
    })
  }

  productToServer = (data: Product): ProductServer => {
    return ({
      id: data.id,
      filename: data.image,
      title: data.title,
      description: data.description,
      price: data.price
    })
  }


}

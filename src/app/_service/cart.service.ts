import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../_models/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productList: Product[] = [];
  cartHasBeenChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();



  constructor(private httpClient: HttpClient) { }

  getCarts() {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/carts', { headers: header })
  }

  getCart(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/carts/' + id, { headers: header })
  }

  createCarts(data: Product) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.post('http://127.0.0.1:8000/api/carts', data, { headers: header })
  }

  updateCart (id: number, data: Product) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.put('http://127.0.0.1:8000/api/carts/' + id, data, { headers: header })
  }

  deleteCart (id: number) {

      let header = new HttpHeaders({
        Authorization: localStorage.getItem('token')!
      })

      return this.httpClient.delete('http://127.0.0.1:8000/api/carts/'+ id, { headers: header })
  }

  addToCart(product: Product) {
    product.count = 0
    if (this.productList.includes(product)){
      product.count!++
    }else {
      this.productList.push(product);
      this.cartHasBeenChanged.emit(this.productList);
    }
  }
}

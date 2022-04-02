import { Product } from 'src/app/_models/product.model';
import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Input()
  cartHasBeenChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  cartRecordList: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  public product!: Product;
  token: any = localStorage.getItem('token');
  userData: any;
  id: any;


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

  createCart(cartItem: Product[]) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.httpClient.post('http://127.0.0.1:8000/api/carts', { cartItem }, { headers: header });
  }

  updateCart(id: number, cartItem: Product[]) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.httpClient.put('http://127.0.0.1:8000/api/carts/' + id, { id, cartItem }, { headers: header })
  }

  deleteCart(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.httpClient.delete('http://127.0.0.1:8000/api/carts/' + id, { headers: header })
  }

  addToCart(product: Product) {

    this.userData = jwt_decode(this.token);
    this.id = this.userData.user_id;
    this.getCart(this.id).subscribe((res: any) => {

      let cartItems: { products: Product[] } = { products: [] }

      if (res.products) {
        cartItems = res;
        if (cartItems.products.some((item: any) => {
          return item.id == product.id;
        })) {
          cartItems.products.forEach((item: any) => {
            if (item.id == product.id) {
              item.product_quantity = item.pivot.product_quantity + 1;
            } else {
              item.product_quantity = item.pivot.product_quantity;
            }
          })
        } else {
          cartItems.products.forEach((item: any) => {
            item.product_quantity = item.pivot.product_quantity;
          })
          product.product_quantity = 1;
          cartItems.products.push(product);
        }
        this.updateCart(this.id, cartItems.products).subscribe((res: any) => {
          this.cartHasBeenChanged.emit(res.products);
        });
      } else {
        product.product_quantity = 1;
        cartItems.products = [];
        cartItems.products.push(product);
        this.createCart(cartItems.products).subscribe((res: any) => {
          this.cartHasBeenChanged.emit(res.products);
        });
      }
    });
  }

}

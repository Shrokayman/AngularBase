import { Product } from 'src/app/_models/product.model';
import { Injectable, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from "jwt-decode";




@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Input()
  private productList: Product[] = [];
  cartHasBeenChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  public product!: Product;
  token: any = localStorage.getItem('token');
  userData: any;
  id: any;
  @Output() productItem: any;






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

  createCart(data: Product[]) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    console.log(data);

    return this.httpClient.post('http://127.0.0.1:8000/api/carts', data, { headers: header });
  }

  updateCart(id: number, data: Product[]) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.put('http://127.0.0.1:8000/api/carts/' + id, data, { headers: header })
  }

  deleteCart(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.delete('http://127.0.0.1:8000/api/carts/' + id, { headers: header })
  }


  addToCart(product: Product) {
    // this.userData = jwt_decode(this.token);
    // this.id = this.userData.user_id;

    // const cart = await this.getCart(this.id);

    // if (cart){
    //   cart.forEach(item =>{
    //     console.log(item);
    //   })
    // }


    // this.getCart(this.id).subscribe(res => {
    //   const cart: any = res;
    //   console.log(cart);
    //   if (cart.products) {
    //     if (cart.products.some((item: any) => {
    //       return item.id = product.id
    //     })) {
    //       cart.products.forEach((item: any) => {
    //         if (item.id == product.id) {
    //           item.pivot.product_quantity += 1;
    //         }
    //       })
    //     } else {
    //       cart.products.push(product);
    //     }
    //     this.updateCart(this.id, cart.products);
    //   } else {

    //     cart.push(product);
    //     this.createCart(cart);
    //     console.log(cart);

    //   }
    //   this.cartHasBeenChanged.emit(cart.products);

    // });


    // this.productList = this.updateCart(this.id);

    if (!product.product_quantity) {
      product.product_quantity = 1;
    }

    if (this.productList.some(x => x.id == product.id)) {
      product.product_quantity += 1;
      console.log(product);

      this.productList = this.productList.map(product1 => {
        console.log(product1.id);

        if (product1.id == product.id) {
          product1 = product;
          console.log(product1);
          console.log(product.product_quantity);
          this.createCart([product1]);

        }
        return product1;
      })

      // console.log(this.productList.includes(product));
      // console.log(product.product_quantity);
    } else {
      this.productList.push(product);
    }
    this.cartHasBeenChanged.emit(this.productList);
    this.createCart(this.productList);
    // console.log(this.amount);
  }


}

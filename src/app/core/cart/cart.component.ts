import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/_models/cart';
import jwt_decode from "jwt-decode";
import { CartService } from 'src/app/_service/cart.service';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/products/';

  token: any = localStorage.getItem('token');
  userData: any;
  id: any;
  carts: any;
  cart = new Cart();
  public grandTotal : number = 0;
  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userData = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.id = this.userData.user_id;
    this.getCart();
    this.cartService.cartRecordList.subscribe(res => {
      this.carts = res;
    })
  }

  getCart() {
    this.cartService.getCart(this.id).subscribe((res: any) => {
      this.cartService.cartRecordList.emit(res);
    });
  }

  // removeItem(item: any) {
  //   this.cartService.removeCartItem(item);
  // }
  emptycart() {
    this.cartService.deleteCart(this.id).subscribe(()=>{
      this.cartService.cartHasBeenChanged.emit([]);
      this.carts.products =[];
    });
  }
  addItemToCart(item: any) {
    this.carts.products.forEach((product: any) => {
      if (product.id == item.id) {
        product.pivot.product_quantity += 1;
      }
      product.product_quantity = product.pivot.product_quantity;
      this.grandTotal += product.price;
    })
    this.cartService.updateCart(this.id, this.carts.products).subscribe((res: any) => {
      this.cartService.cartHasBeenChanged.emit(res.products);
    });
  }
  removeFromCart(item: any) {
    this.carts.products = this.carts.products.filter((product: any) => {
      if (product.id == item.id) {
        product.pivot.product_quantity -= 1;
      }
      if (!product.pivot.product_quantity) {
        return false;
      }
      product.product_quantity = product.pivot.product_quantity;
      return true;
    })
    this.cartService.updateCart(this.id, this.carts.products).subscribe((res: any) => {
      this.cartService.cartHasBeenChanged.emit(res.products);
    });
  }
  deleteItem (item:any) {
    this.carts.products = this.carts.products.filter((product: any) => {
      if (product.id == item.id) {
        return false;
      }
      product.product_quantity = product.pivot.product_quantity;
      return true;
    })
    this.cartService.updateCart(this.id, this.carts.products).subscribe((res: any) => {
      this.cartService.cartHasBeenChanged.emit(res.products);
    });
  }
}

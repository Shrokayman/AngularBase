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
  // public products : any = [];
  // public grandTotal !: number;
  constructor(private cartService: CartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.userData = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);

    this.id = this.userData.user_id;

    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
    this.getCarts();
    this.getCart();
  }

  getCarts() {
    this.cartService.getCarts().subscribe(res => {
      this.carts = res;
      // console.log(res);
    });
  }
  getCart() {
    this.cartService.getCart(this.id).subscribe(res => {
      this.carts = res;
      this.cart = this.carts;
      console.log(res);

    });
  }

  // removeItem(item: any) {
  //   this.cartService.removeCartItem(item);
  // }
  emptycart() {
    this.cartService.deleteCart(this.id);
  }
}

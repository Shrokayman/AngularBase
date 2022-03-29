import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { CartService } from 'src/app/_service/cart.service';
import { OrderService } from 'src/app/_service/order.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {



imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/products/';
token: any = localStorage.getItem('token');
userData: any;
id: any;
cart: any;

constructor(private cartService: CartService, private orderService: OrderService) { }

ngOnInit(): void {

  this.userData = localStorage.getItem('token');
  this.userData = jwt_decode(this.token);
  this.id = this.userData.user_id;

  this.getCart();
  this.cartService.cartRecordList.subscribe((res: any) => {
    this.cart = res;
  })
  
}

getCart() {
  this.cartService.getCart(this.id).subscribe((res: any) => {
    this.cartService.cartRecordList.emit(res);
    // this.cart.products.forEach((item: any) => {
    //   let itemPrice;
    //   itemPrice = item.price * item.pivot.product_quantity;
    //   this.totalPrice += itemPrice;
    //   return this.totalPrice
    // })
  });
}

createOrder() {
  this.orderService.createOrder(this.cart).subscribe(() => { })
  this.cartService.deleteCart(this.id).subscribe(() => {
    this.cartService.cartHasBeenChanged.emit([]);
    this.cart.products = [];
  });
}


}

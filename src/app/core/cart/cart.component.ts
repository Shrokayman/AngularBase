import { Component, OnInit } from '@angular/core';
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
  cart: any;
  public totalPrice: number = 0;
  constructor(private cartService: CartService) { }

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
      if (this.cart.products) {
        this.cart.products.forEach((item: any) => {
          let itemPrice;
          itemPrice = (item.price - item.discount);
          this.totalPrice += (item.price * item["pivot"].product_quantity) - (item.discount * item["pivot"].product_quantity);
          return this.totalPrice
        })
      }
    });
  }

  emptycart() {
    this.cartService.deleteCart(this.id).subscribe(() => {
      this.cartService.cartHasBeenChanged.emit([]);
      this.cart.products = [];
    });
  }

  addItemToCart(item: any) {
    this.cart.products.forEach((product: any) => {
      if (product.id == item.id) {
        product.pivot.product_quantity += 1;
        this.totalPrice += product.price - item.discount;
      }
      product.product_quantity = product.pivot.product_quantity;
    })
    this.cartService.updateCart(this.id, this.cart.products).subscribe((res: any) => {
      this.cartService.cartHasBeenChanged.emit(res.products);
    });
  }

  removeFromCart(item: any) {
    this.cart.products = this.cart.products.filter((product: any) => {
      if (product.id == item.id) {
        product.pivot.product_quantity -= 1;
        this.totalPrice -= (item.price - item.discount);
      }
      if (!product.pivot.product_quantity) {
        return false;
      }
      product.product_quantity = product.pivot.product_quantity;
      return true;
    })
    this.cartService.updateCart(this.id, this.cart.products).subscribe((res: any) => {
      this.cartService.cartHasBeenChanged.emit(res.products);
    });
  }

  deleteItem(item: any) {
    this.cart.products = this.cart.products.filter((product: any) => {
      if (product.id == item.id) {
        this.totalPrice -= ((item.price * item["pivot"].product_quantity) - (item.discount * item["pivot"].product_quantity));
        return false;
      }
      product.product_quantity = product.pivot.product_quantity;
      return true;
    })
    this.cartService.updateCart(this.id, this.cart.products).subscribe((res: any) => {
      this.cartService.cartHasBeenChanged.emit(res.products);
    });
  }
}

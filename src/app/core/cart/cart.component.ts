import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import { KartService } from 'src/app/_service/kart.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Kart } from 'src/app/_models/kart';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:any;
  carts: any;
  cart = new Kart();
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private kartservice: KartService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.getCarts();
    this.getCart();
  }

  getCarts() {
    this.kartservice.getCarts().subscribe(res => {
      this.carts = res;
      console.log(res);
    });
  }
  getCart() {
    this.kartservice.getCart(this.id).subscribe(res => {
      this.carts= res;
      this.cart = this.carts;
      console.log(res);

    });
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
}

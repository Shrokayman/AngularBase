import { KartService } from 'src/app/_service/kart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CartService } from 'src/app/_service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Kart } from 'src/app/_models/kart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any = localStorage.getItem('token')
  userData: any;
  public totalItem: number = 0;
  public searchTerm !: string;
  carts: any;
  cart = new Kart();
  id: any;




  constructor(private router: Router, private cartService: CartService, private route: ActivatedRoute, private kartservice: KartService) { }

  ngOnInit(): void {

    this.userData = jwt_decode(this.token);

    this.id = this.userData.user_id;

    if (this.token) {
      this.userData = jwt_decode(this.token);
      console.log(this.userData.user_id);

    }
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    this.getCarts();
    this.carts = this.getCart();

    for (const key in this.carts) {
      if (Object.prototype.hasOwnProperty.call(this.carts, 'products')) {
        console.log('products');


      }
    }
  }


  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getCarts() {
    this.kartservice.getCarts().subscribe(res => {
      this.carts = res;
      // console.log(res);
    });
  }
  getCart() {
    this.kartservice.getCart(this.id).subscribe(res => {
      this.carts = res;
      // console.log(res);
      this.totalItem = this.carts[0]['products'].length;
      // console.log(this.totalItem + ' this is total item');

    });
  }

}
function products(products: any) {
  throw new Error('Function not implemented.');
}


import { ProductWithCounter } from './../../_models/product.model';
import { CartService } from './../../_service/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  addedProducts: ProductWithCounter[] = [];
  public totalItem : number = 0;
  public searchTerm !: string;
  token:any = localStorage.getItem('token')
  userData :any;
  item:any;

  dropdownOpened = false;

  constructor(private router :Router, private cartService : CartService ) {
    // this.addedProducts = this.cartService.cartArray;
   }

  ngOnInit(): void {
    if(this.token){
      this.userData = jwt_decode(this.token);
      this.cartService.cartHasBeenChanged.subscribe(
        (res)=>{
          this.addedProducts = res;
        },
        (err)=>{},
        ()=>{}
      )
    }

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}

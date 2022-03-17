import { Product } from 'src/app/_models/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/_service/cart.service';



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
  id: any;
  productList: Product[] = [];
  product!: Product;
  productCount!: number;



  constructor(private router: Router, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userData = jwt_decode(this.token);

    this.id = this.userData.user_id;

    if (this.token) {
      this.userData = jwt_decode(this.token);
      console.log(this.userData.user_id);

    }
    this.cartService.cartHasBeenChanged.subscribe(
      (res) => {
        this.productList = res;
      },
      (err) => { },
      () => { }
      );
      // console.log(this.productCount);
  }


  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  // getCarts() {
  //   this.cartService.getCarts().subscribe(res => {
  //     this.carts = res;
  //     // console.log(res);
  //   });
  // }
  // getCart() {
  //   this.cartService.getCart(this.id).subscribe(res => {
  //     this.carts = res;
  //     // console.log(res);
  //     this.totalItem = this.carts[0]['products'].length;
  //     // console.log(this.totalItem + ' this is total item');

  //   });
  // }


}
function products(products: any) {
  throw new Error('Function not implemented.');
}


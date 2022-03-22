import { Product } from 'src/app/_models/product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CartService } from 'src/app/_service/cart.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/products/';
  token: any = localStorage.getItem('token')
  userData: any;
  public searchTerm !: string;
  id: any;
  productList: Product[] = [];
  product: any;
  productCount: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {

    this.userData = jwt_decode(this.token);

    this.id = this.userData.user_id;

    if (this.token) {
      this.userData = jwt_decode(this.token);
    }

    this.cartService.cartHasBeenChanged.subscribe(
      (res: any) => {
        this.productList = res;
        this.productCount = 0;

        this.productList.forEach((item: any) => {
          this.productCount += item.pivot.product_quantity;
        });


      },
      (err) => { },
      () => { }
    );


    this.getCart();


  }


  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getCart() {
    this.cartService.getCart(this.id).subscribe((res: any) => {
      this.product = res;
      if (this.product.products) {
        for (const item of this.product.products) {
          this.productCount += item.pivot.product_quantity;
        }
      }
    });
  }

}
function products(products: any) {
  throw new Error('Function not implemented.');
}


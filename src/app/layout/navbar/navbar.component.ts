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
  product: any;
  productCount: number = 0;



  constructor(private router: Router, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userData = jwt_decode(this.token);

    this.id = this.userData.user_id;

    if (this.token) {
      this.userData = jwt_decode(this.token);
      console.log(this.userData.user_id);

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
    // console.log(this.productCount);
    this.getCart();
    this.getCarts();

  }


  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getCarts() {
    this.cartService.getCarts().subscribe(res => {
      this.product = res;
      // console.log(res);
    });
  }
  getCart() {
    this.cartService.getCart(this.id).subscribe((res: any) => {
      this.product = res;
      // this.product.forEach((element: any) => {

      //   // this.productCount = 0
      //   console.log(element['products']);
      //   element['products'].forEach((item: any) => {
      //     console.log(item.pivot.product_quantity);
      //     this.productCount += item.pivot.product_quantity;

      //     this.productCount = this.productCount + this.productCount;
      //   });
      //   // this.productCount = this.productCount;

      // });
      if (this.product.products) {
        for (const item of this.product.products) {
          // for (let i = 0; i < item.length; i++)

          // console.log(item.pivot);
          this.productCount += item.pivot.product_quantity;
          console.log(this.productCount);
        }

      }

      // this.productCount = this.productCount + this.productCount;
      // this.productCount += this.productCount;

      // console.log(res);
      // this.totalItem = this.productList[0]['products'].length;
      // console.log(this.totalItem + ' this is total item');

    });
  }


}
function products(products: any) {
  throw new Error('Function not implemented.');
}


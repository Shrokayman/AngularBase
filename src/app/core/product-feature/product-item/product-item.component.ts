import { WishlistService } from './../../../_service/wishlist.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_service/product.service';
import { CartService } from 'src/app/_service/cart.service';
import jwt_decode from "jwt-decode";



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  userDataFromToken:any;
  public filterCategory: any
  searchKey: string = "";
  token: any = localStorage.getItem('token')
  userData: any;
  id: any;
  productList: Product[] = [];
  imageDirectoryPath: any =''


  @Input() productItem!: any;

  constructor(private productService : ProductService, private wishlistService:WishlistService, private cartService: CartService) { }

  ngOnInit(): void {
  this.imageDirectoryPath= 'http://127.0.0.1:8000/storage/products/';
  this.cartService.cartHasBeenChanged.subscribe(
    (res) => {
      this.productList = res;
    },
    (err) => { },
    () => { }
  );

  }
  addToCart() {
    this.cartService.addToCart(this.productItem);
  }

  addtoWishlist(productid:any){
    this.userDataFromToken = jwt_decode(this.token);
    this.productItem.isWished=!this.productItem.isWished;
    this.wishlistService.addData(productid,this.userDataFromToken.user_id).subscribe(()=>{

    });
  }
}



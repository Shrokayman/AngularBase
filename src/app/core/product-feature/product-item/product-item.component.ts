import { WishlistService } from './../../../_service/wishlist.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_service/product.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  token :any = localStorage.getItem('token');
  userDataFromToken:any;
  addedToWishlist:boolean=false;

  @Input()
  productItem: any
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';

  constructor(private productService : ProductService, private wishlistService:WishlistService) { }

  ngOnInit(): void {
    
  }

  addtoWishlist(productid:any){
    this.userDataFromToken = jwt_decode(this.token);
    this.addedToWishlist=!this.addedToWishlist;
    this.wishlistService.addData(productid,this.userDataFromToken.user_id).subscribe(()=>{
    });
  }

  removeFromWishlist(productid:any){
    this.userDataFromToken = jwt_decode(this.token);
    this.addedToWishlist=!this.addedToWishlist;
    this.wishlistService.removeData(productid,this.userDataFromToken.user_id).subscribe(()=>{
    })
  }
  
}

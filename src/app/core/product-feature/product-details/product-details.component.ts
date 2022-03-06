import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category.service';
import { BrandService } from 'src/app/_service/brand.service';
import { ProductService } from 'src/app/_service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import jwt_decode from "jwt-decode";
import { WishlistService } from './../../../_service/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private categoryService:CategoryService,private brandService:BrandService,private activatedRoute:ActivatedRoute,private productService:ProductService,private wishlistService:WishlistService) { }
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';
  productItem: any;
  id: any;
  relatedProducts:any =[];
  token :any = localStorage.getItem('token');
  userDataFromToken:any;
  addedToWishlist:boolean=false;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id =params.get('id');
    });
    this.getProductById(this.id);
    this.getRelatedProducts()
  }
  getProductById(id:number){
  
    this.productService.getProductById(id).subscribe(res=> {
    this.productItem = res;
  })
}
  getRelatedProducts() {
this.productService.showRelated(this.id).subscribe(res=> {
  this.relatedProducts = res;
});  }

addtoWishlist(productid:any){
  this.userDataFromToken = jwt_decode(this.token);
  this.addedToWishlist=!this.addedToWishlist;
  this.wishlistService.addData(productid,this.userDataFromToken.user_id).subscribe(()=>{
  });
}

removeFromWishlist(productid:any){
  this.userDataFromToken = jwt_decode(this.token);
  this.wishlistService.removeData(productid,this.userDataFromToken.user_id).subscribe(()=>{
    this.addedToWishlist=!this.addedToWishlist;
  })
}
}



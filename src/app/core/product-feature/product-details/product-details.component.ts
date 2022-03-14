import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category.service';
import { BrandService } from 'src/app/_service/brand.service';
import { ProductService } from 'src/app/_service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import jwt_decode from "jwt-decode";
import { WishlistService } from './../../../_service/wishlist.service';
import { ReviewService } from 'src/app/_service/review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // productid: any;
  constructor(private categoryService:CategoryService,private brandService:BrandService,private activatedRoute:ActivatedRoute,private productService:ProductService,private wishlistService:WishlistService,private reviewService:ReviewService) { }
  productavgRate: any;
  productiswished:any;
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
    // console.log(this.productItem)
    this.getRelatedProducts()
    this.getAvgRate(this.id)
    this.checkproductwishlist(this.id)
    }
  getProductById(id:number){
  
    this.productService.getProductById(id).subscribe(res=> {
    this.productItem = res;
    console.log(this.productItem)

  })
}
  getRelatedProducts() {
this.productService.showRelated(this.id).subscribe(res=> {
  this.relatedProducts = res;
});  }

addtoWishlist(id:any){
  this.userDataFromToken = jwt_decode(this.token);
  this.addedToWishlist=!this.addedToWishlist;
  this.wishlistService.addData(id,this.userDataFromToken.user_id).subscribe(()=>{
  });
}

removeFromWishlist(id:any){
  this.userDataFromToken = jwt_decode(this.token);
  this.wishlistService.removeData(id,this.userDataFromToken.user_id).subscribe(()=>{
    this.addedToWishlist=!this.addedToWishlist;
  })
}
getAvgRate(id:number) {
  this.productService.getAvgRateProductById(id).subscribe((res: any)=> {
    this.productavgRate = Math.floor(res);
    if(this.productavgRate > 5){
      this.productavgRate = Math.floor(res/2);
    }
    console.log(this.productavgRate);
  });  }
  checkproductwishlist(id:number){
    this.productService.checkproductbyId(id).subscribe(res=>{
      if(res == true){
        this.productiswished=res;

      }else{
        this.productItem=res;
      }
    })
  }
}



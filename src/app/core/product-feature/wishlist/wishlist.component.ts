import { Component, OnInit } from '@angular/core';
import { WishlistService } from './../../../_service/wishlist.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  token :any = localStorage.getItem('token');
  userDataFromToken:any;
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';
  allProducts:any;
  p:any;
  constructor(private wishlistService:WishlistService) { }

  ngOnInit(): void {
    this.getData()
  }
getData(){
  this.userDataFromToken = jwt_decode(this.token);
  this.wishlistService.getData(this.userDataFromToken.user_id).subscribe(res=>{
    this.allProducts=res
    console.log(res)
  })
}

removeFromWishlist(productid:any){
  if(confirm("Are you sure to delete ")) {
  this.userDataFromToken = jwt_decode(this.token);
  this.wishlistService.removeData(productid,this.userDataFromToken.user_id).subscribe(()=>{
    this.getData()
  })
}
}
}

import { ProductService } from './../../_service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getTopProducts()
  }



  // getCategoryData(){
  //   this.categoryService.getData().subscribe(res=>{
  //     this.categories=res;
  //   })
  // }

  getTopProducts(){
    this.productService.topProducts().subscribe(res=>{
      this.products=res;
    })
  }
}

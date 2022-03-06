import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/_service/category.service';
import { BrandService } from 'src/app/_service/brand.service';
import { ProductService } from 'src/app/_service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private categoryService:CategoryService,private brandService:BrandService,private activatedRoute:ActivatedRoute,private productService:ProductService,) { }
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';
  productItem: any;
  id: any;
  relatedProducts:any =[];


  

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
}



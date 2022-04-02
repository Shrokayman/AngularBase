import { ProductService } from 'src/app/_service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_service/category.service';
import { BrandService } from 'src/app/_service/brand.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  allProducts:any=[];
  allCategories:any=[];
  allBrands:any=[];
  searchKey: string = ''
  page : number = 1;
  



  constructor(private productService : ProductService ,
    private categoryServise : CategoryService,
    private brandService : BrandService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllBrands();

    // Get the response from the search
    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
        // console.log(val);
    })
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.allProducts = res
      // console.log(this.allProducts);
    })
  }

  getAllCategories(){
    this.categoryServise.getData().subscribe(res =>{
      this.allCategories = res
    })
  }


  getAllBrands(){
    this.brandService.getBrandData().subscribe(res =>{
      this.allBrands = res
    })
  }


}

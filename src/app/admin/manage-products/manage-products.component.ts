import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';
import { Product } from 'src/app/_models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products:any=[];
  product= new Product;
  id: any;
  p:any;
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';
  searchKey: string = ''

  constructor(private productservice:ProductService,private ngxpaginationModule: NgxPaginationModule ) { }

  ngOnInit(): void {
    this.getAllProducts();
        // Get the response from the search
        this.productservice.search.subscribe((val: any) => {
          this.searchKey = val;
        })
  }

  getAllProducts(){
    this.productservice.getProducts().subscribe(res=> {
      this.products=res;
    });
  }

  deleteProduct(id:number){
    if(confirm("Are you sure to delete ")){
    this.productservice.deleteProduct(id).subscribe(res=> {
    this.getAllProducts();
  })
}

}
getProduct(){
  this.productservice.getProductById(this.id).subscribe(res => {
   this.getProduct();
  })
  }

}

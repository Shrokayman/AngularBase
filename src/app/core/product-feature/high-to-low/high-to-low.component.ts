import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-high-to-low',
  templateUrl: './high-to-low.component.html',
  styleUrls: ['./high-to-low.component.css']
})
export class HighToLowComponent implements OnInit {

  allProducts:any=[];
  searchKey: string = ''
  page : number = 1;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
    // Get the response from the search
    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
      console.log(val);
    })
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.allProducts = res;
      this.allProducts.sort((a :any, b :any) => {return (b.price - b.discount) - (a.price - a.discount)});
      console.log(this.allProducts);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-low-to-high',
  templateUrl: './low-to-high.component.html',
  styleUrls: ['./low-to-high.component.css']
})
export class LowToHighComponent implements OnInit {

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
      this.allProducts.sort((a :any, b :any) => {return (a.price - a.discount) - (b.price - b.discount)});
    })
  }

}

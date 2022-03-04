import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: any
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';

  constructor(private productService : ProductService) { }

  ngOnInit(): void {

  }

}

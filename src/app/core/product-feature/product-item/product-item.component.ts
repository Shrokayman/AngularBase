import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_service/product.service';
import { CartService } from 'src/app/_service/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  productList: Product[] = [];
  product:any;
  public productCount!: number ;


  @Input()
  productItem!: Product;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/products/';

  constructor(private productService: ProductService, private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.cartHasBeenChanged.subscribe(
      (res) => {
        this.productList = res;



      },
      (err) => { },
      () => { }
    );

  }

  onItemAdded() {
    this.cartService.addToCart(this.productItem);
    console.log(this.productItem);

    // this.product.count += 1;
  }



}



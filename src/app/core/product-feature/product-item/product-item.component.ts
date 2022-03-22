import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_service/product.service';
import { CartService } from 'src/app/_service/cart.service';
import jwt_decode from "jwt-decode";



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public filterCategory: any
  searchKey: string = "";
  token: any = localStorage.getItem('token')
  userData: any;
  id: any;
  productList: Product[] = [];

  @Input() productItem!: Product;

  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/products/';

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.cartHasBeenChanged.subscribe(
      (res) => {
        this.productList = res;
      },
      (err) => { },
      () => { }
    );

  }

  addToCart() {
    this.cartService.addToCart(this.productItem);
  }

}



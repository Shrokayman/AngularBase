import { CartService } from './../../../_service/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_service/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem!: Product;

  @Output()
  itemAddedToCart: EventEmitter<Product> = new EventEmitter<Product>();


  public productList : any ;
  public filterCategory : any
  searchKey:string ="";

  // @Input()
  // productItem: any
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';
  api: any;

  constructor(private productService : ProductService, private cartService : CartService) { }

  ngOnInit(): void {

    // this.api.getProducts()
    // .subscribe((res: any)=>{
    //   this.productList = res;
    //   this.filterCategory = res;
    //   this.productList.forEach((a:any) => {
    //     if(a.category ==="women's clothing" || a.category ==="men's clothing"){
    //       a.category ="fashion"
    //     }
    //     Object.assign(a,{quantity:1,total:a.price});
    //   });
    //   console.log(this.productList)
    // });

  }
  // onItemAdded() {
  //   console.log(this.productItem)
  //   this.itemAddedToCart.emit(this.productItem);
  // }
  onItemAdded(){
    console.log(this.productItem);
    // this.itemAddedToCart.emit(product);
    this.cartService.addProductToCart(this.productItem);
  }

  addProductToCart(item: any){
    this.cartService.addProductToCart(item);
    console.log(item);

  }



  // getProducts(){
  //   return this.productList.asObservable();
  // }
}

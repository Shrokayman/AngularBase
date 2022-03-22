import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import { Product } from 'src/app/_models/product.model';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productList: Product[] = [];

  @Input() productItem!: Product;

  constructor(private cartService: CartService) { }

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

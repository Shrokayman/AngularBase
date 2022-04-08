import { CategoryService } from 'src/app/_service/category.service';
import { BrandService } from 'src/app/_service/brand.service';
import { ProductService } from 'src/app/_service/product.service';
import { ActivatedRoute } from '@angular/router';
import jwt_decode from "jwt-decode";
import { WishlistService } from './../../../_service/wishlist.service';
import { ReviewService } from 'src/app/_service/review.service';
import { Review } from 'src/app/_models/review.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import { Product } from 'src/app/_models/product.model';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addform: FormGroup;
  review = new Review;
  submmtied: boolean = false;
  allProducts: any;
  constructor(private categoryService: CategoryService, private brandService: BrandService, private activatedRoute: ActivatedRoute, private productService: ProductService, private wishlistService: WishlistService, private reviewService: ReviewService, private formBuilder: FormBuilder, private router: Router, private cartService: CartService) {
    this.addform = this.formBuilder.group({
      rate: new FormControl(null, [Validators.required])
    })

  }
  get f() { return this.addform.controls }

  Rate: any;
  rate: any;
  productavgRate: any;
  productiswished: any;
  imageDirectoryPath: any = 'http://127.0.0.1:8000/storage/products/';
  id: any;
  relatedProducts: any = [];
  token: any = localStorage.getItem('token');
  userDataFromToken: any;
  addedToWishlist: boolean = false;
  data: any;

  productList: Product[] = [];

  @Input() productItem: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getProductById(this.id);
    this.getRelatedProducts()
    this.getAvgRate(this.id)

    this.cartService.cartHasBeenChanged.subscribe(
      (res) => {
        this.productList = res;
      },
      (err) => { },
      () => { }
    );
  }
  getProductById(id: number) {

    this.productService.getProductById(id).subscribe(res => {
      this.productItem = res;
      console.log(this.productItem)

      if (this.productItem.isBought) {

        this.productItem.isRated = !this.productItem.isRated;
      }


    })
  }
  getRelatedProducts() {
    this.productService.showRelated(this.id).subscribe(res => {
      this.relatedProducts = res;
    });
  }
  addtoWishlist(id: number) {
    this.userDataFromToken = jwt_decode(this.token);
    this.productItem.isWished = !this.productItem.isWished;

    this.wishlistService.addData(id, this.userDataFromToken.user_id).subscribe(() => {

    });

  }

  addToCart() {
    this.cartService.addToCart(this.productItem);
  }

  getAvgRate(id: number) {
    this.productService.getAvgRateProductById(id).subscribe((res: any) => {
      this.productavgRate = Math.floor(res);
      if (this.productavgRate > 5) {
        this.productavgRate = Math.floor(res / 2);
      }
      // console.log(this.productavgRate);
    });
  }
  insertRate() {
    this.submmtied = true
    if (this.addform.invalid) {
      return;
    } else {
      this.Rate = this.addform.value.rate;
      console.log(this.review.rate)
      console.log(this.Rate)
      this.userDataFromToken = jwt_decode(this.token);
      console.log(this.id)
      console.log(this.userDataFromToken.user_id)
      console.log(this.addform.value.rate);
      this.reviewService.addRate(this.id, this.userDataFromToken.user_id, this.review.rate).subscribe((res) => {
        console.log(res)
      })
      alert("thanks For Rating")
      this.router.navigate(['/product/listing']);

    }

  }
}

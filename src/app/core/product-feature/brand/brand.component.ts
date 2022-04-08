import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/_service/brand.service';
import { CategoryService } from 'src/app/_service/category.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandProducts: any = [];
  id: any;
  allCategories: any = [];
  allBrands: any = [];
  searchKey: string = ''
  page: number = 1;

  constructor( private categoryService: CategoryService,
    private route: ActivatedRoute,
    private brandService: BrandService) { }

  ngOnInit(): void {
    this.id = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);

      this.getBrandProduct();
      this.getAllCategories();
      this.getAllBrands();
    });


    // Get the response from the search
    this.categoryService.search.subscribe((val: any) => {
      this.searchKey = val;
      // console.log(val);
    })
  }

  getBrandProduct(){
    this.brandService.getProducts(this.id).subscribe(res => {
      this.brandProducts = res
    })
  }

  getAllCategories() {
    this.categoryService.getData().subscribe(res => {
      this.allCategories = res
    })
  }


  getAllBrands() {
    this.brandService.getBrandData().subscribe(res => {
      this.allBrands = res
    })
  }


}

import { AfterViewChecked, Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/_service/brand.service';
import { CategoryService } from 'src/app/_service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryProducts: any = [];
  id: any;
  allCategories: any = [];
  allBrands: any = [];
  searchKey: string = ''
  page: number = 1;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private brandService: BrandService) { }


  ngOnInit(): void {
      this.id = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getCategoryProducts();
      this.getAllCategories();
      this.getAllBrands();
    });


    // Get the response from the search
    this.categoryService.search.subscribe((val: any) => {
      this.searchKey = val;
      // console.log(val);
    })
  }

  getCategoryProducts() {
    this.categoryService.getProducts(this.id).subscribe(res => {
      this.categoryProducts = res
      console.log(this.id);
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

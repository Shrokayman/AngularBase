import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/_models/product.model';
import { CategoryService } from 'src/app/_service/category.service';
import { BrandService } from 'src/app/_service/brand.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  form!:FormGroup;
  submitted =false;
  token :any = localStorage.getItem('token');
  userDataFromToken : any
  product = new Product();
  products:any;
  categories: any;
  brands:any;
  data:any
  id: any;
  files:any;
  required:any;
  file: any;


  constructor(private formBuilder: FormBuilder,
              private productService : ProductService,
              private route: ActivatedRoute,
              private router : Router,
              private categoryService:CategoryService,
              private brandService:BrandService) { 
                
              }

  createForm(){
    this.form = this.formBuilder.group({
    name:['' , [Validators.required , Validators.minLength(3)]],
    description:['' , [Validators.required , Validators.minLength(15)]],
    price:['' , [Validators.required]],
    discount:['' , [Validators.required , Validators.minLength(3)]],
    category_id:['' , [Validators.required ]],
    brand_id:['' , [Validators.required ]],
    });
  }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
    this.createForm();
    this.GetData();
    this.getBrands();
    this.getCategories();
  }
  getBrands () {
    this.brandService.getBrandData().subscribe( res=> {
  
      this.brands= res;
    
    })
  }
  getCategories () {
    this.categoryService.getData().subscribe(res=> {
  
      this.categories= res;
    
    })
  }
  updateProduct(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    else{
      this.productService.updateProduct(this.id , this.product).subscribe(res=> {
        this.router.navigate(['/admin/products'])
        return alert("Product Updated Succesfully");
      });
    }
  }

  get f(){
    return this.form.controls
  }
  // uploadImage(event:any) {
  //   if(event.target.files.length > 0){
  //     this.file = event.target.files[0];
  //     this.form.get('image')?.setValue(this.file);
  //   }
  // }
  GetData(){
    this.productService.getProductById(this.id).subscribe(res => {
      console.log(res);
      this.data = res
      this.product.name = this.data.name;
      this.product.description = this.data.description;
      this.product.price = this.data.price;
      this.product.discount = this.data.discount;
      this.product.category_id = this.data.category_id;
      this.product.brand_id = this.data.brand_id;
      this.product.image = this.data.image;
    });
  }
}
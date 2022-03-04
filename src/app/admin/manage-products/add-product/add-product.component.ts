import { BrandService } from './../../../_service/brand.service';
import { CategoryService } from './../../../_service/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_service/product.service';
import { Product } from 'src/app/_models/product.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  submitted= false;
  data:any;
  form!: FormGroup;
  products:any;
  categories: any;
  brands:any;
  files:any;
  image:any;
  required:any;
  product = new Product();
  constructor(private productservice:ProductService, private categoryService:CategoryService, private brandService:BrandService, 
    private formBuilder: FormBuilder, private toster:ToastrService, private router:Router,private route:ActivatedRoute ) { }

      createForm(){
        this.form = this.formBuilder.group({
          name:['' , [Validators.required , Validators.minLength(3)]],
          description:['' , [Validators.required , Validators.minLength(15)]],
          price:['' , [Validators.required]],
          discount:['' , [Validators.required , Validators.minLength(3)]],
          category_id:['' , [Validators.required ]],
          brand_id:['' , [Validators.required ]],
          image:['' , [Validators.required ]],
        });
      }
    
      
  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl(),
      description:new FormControl(),
      price:new FormControl(),
      discount:new FormControl(),
      category_id:new FormControl(),
      brand_id:new FormControl(), 
      image: new FormControl(),
    }
    );
    
    this.createForm();
    this.getBrands();
    this.getCategories();
  }
    
insertProduct() {
  this.submitted = true;
  if(this.form.invalid){
    return;
  }
  else{
      this.productservice.insertProduct(this.product).subscribe(res=>{
        this.data = res
        alert ("Product Added Succesfully");
        this.router.navigate(['/admin/products'])
      })
    }
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

uploadImage(event:any) { 
  this.files = event.target.files[0];
  console.log(this.files)
}

get f() {
  return this.form.controls;
}




}
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
  file:any;
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
          image:[null, [Validators.required ]],
        });
      }


  ngOnInit(): void {
    this.createForm();
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
uploadImage(event:any) {
  if(event.target.files.length > 0){
    this.file = event.target.files[0];
    this.form.get('image')?.setValue(this.file);
  }
}


insertProduct() {
  this.submitted = true;
  if(this.form.invalid){
    return;
  }
  else{
    const formData = new FormData();
    formData.append('name' , this.form.get("name")?.value);
    formData.append('description' , this.form.get("description")?.value);
    formData.append('price' , this.form.get("price")?.value);
    formData.append('discount' , this.form.get("discount")?.value);
    formData.append('category_id' , this.form.get("category_id")?.value);
    formData.append('brand_id' , this.form.get("brand_id")?.value);
    formData.append('image' , this.form.get("image")?.value);

      this.productservice.insertProduct(formData).subscribe(res=>{
        this.data = res
        console.log(res);

        alert ("Product Added Succesfully");
        this.router.navigate(['/admin/products'])
      })
    }
}


get f() {
  return this.form.controls;
}




}

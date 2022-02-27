import { BrandService } from './../../../_service/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/_models/brand';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brand=new Brand;
  addform:FormGroup;
  submmtied:boolean = false;

  constructor(private brandService:BrandService, private formBuilder:FormBuilder) { 
    this.addform =this.formBuilder.group({
      name: new FormControl(null,[Validators.required, Validators.pattern('^[a-zA-Z][A-Za-z0-9_]*$')])
    })
  }
  get f(){return this.addform.controls}

  ngOnInit(): void {
  }
  insertData(){
    this.submmtied=true
    // this.brandService.addData(this.brand).subscribe(res=>{
    //   console.log(res)
    // })
    if(this.addform.invalid){
      return;
    }else{
      this.brandService.addData(this.brand).subscribe(res=>{
        console.log(res)
      })
      alert('brand have been saved')
    }
  }

}

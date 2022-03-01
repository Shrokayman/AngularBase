import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from './../../../_service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category=new Category;
  addform:FormGroup;
  submmtied:boolean = false;


  constructor(private categoryservice:CategoryService, private formBuilder:FormBuilder, private router : Router) { 
    this.addform =this.formBuilder.group({
      name: new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z][A-Za-z0-9&_+]*$')])
    })
  }

  get f(){return this.addform.controls}

  ngOnInit(): void {

  }
  insertData(){
    this.submmtied=true
    if(this.addform.invalid){
      return;
    }
    else{
      this.categoryservice.addData(this.category).subscribe(res=>{
        console.log(res)
      })
      alert("Category saved")
      this.router.navigate(['/admin/categories']);
    }
  }



}

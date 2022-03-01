import { CategoryService } from './../../_service/category.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  categories:any;
  deleteAlert:any;
  p:any;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategoryData();
  }

  getCategoryData(){
    this.categoryService.getData().subscribe(res=>{
      this.categories=res;
    })
  }
  deleteData(id:any){
    if(confirm("Are you sure to delete ")) {
      this.categoryService.deleteData(id).subscribe(res=>{
        this.getCategoryData()
      })
    }
    
  }

}

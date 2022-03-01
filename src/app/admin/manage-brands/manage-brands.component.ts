import { BrandService } from './../../_service/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-brands',
  templateUrl: './manage-brands.component.html',
  styleUrls: ['./manage-brands.component.css']
})
export class ManageBrandsComponent implements OnInit {
  brands:any;
  p:any;

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrandsData();
  }


  getBrandsData(){
    this.brandService.getBrandData().subscribe(res=>{
      this.brands=res;
    });
  }
  deleteData(id:any){
    if(confirm("Are you sure to delete ")) {
      this.brandService.deleteData(id).subscribe(res=>{
        this.getBrandsData()
      })
    }

  }

}

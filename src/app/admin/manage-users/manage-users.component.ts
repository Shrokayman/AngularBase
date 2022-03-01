import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Router } from '@angular/router';



@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  constructor(private userservice:UserService ,private router : Router,private ngxpaginationModule: NgxPaginationModule) { }

  ngOnInit(): void {
    this.getusers();
    
  }
  users:any=[];
  p:any;
  getusers(){
    
    this.userservice.getAllUsers().subscribe(res=>{
      this.users = res;
    }) 
  }
  deleteusers(id: number){
    if(confirm("Are you sure to delete ")) {
     this.userservice.deleteUser(id).subscribe(res=>{
      this.getusers();
    })
  }
  }
}

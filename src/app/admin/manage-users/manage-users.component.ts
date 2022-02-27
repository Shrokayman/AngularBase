import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users:any;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.getusers();
    
  }
  getusers(){
    this.userservice.getAllUsers().subscribe(res=>{
      this.users = res;
    }) 
  }
  deleteusers(id: number){
     this.userservice.deleteUser(id).subscribe(res=>{
        this.getusers();
     })
  
  }
}

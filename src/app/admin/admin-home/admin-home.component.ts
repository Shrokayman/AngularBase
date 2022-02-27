import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_service/user.service';
import { User } from './../../_models/user.model';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  token :any = localStorage.getItem('token');
  userDataFromToken : any
  user = new User();
  data:any


  constructor(
              private userService : UserService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    if(this.token){
      this.userDataFromToken = jwt_decode(this.token);
    }
    this.getData();
  }
  getData(){
    this.userService.getUserById(this.userDataFromToken.user_id).subscribe(res => {
      console.log(res);
      this.data = res
      this.user.fname = this.data.fname;
      this.user.lname = this.data.lname;
    });
  }

}

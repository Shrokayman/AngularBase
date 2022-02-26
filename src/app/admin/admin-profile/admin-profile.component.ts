import { User } from './../../_models/user.model';
import jwt_decode from "jwt-decode";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';


@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  form!:FormGroup;
  submitted =false;
  token :any = localStorage.getItem('token');
  userDataFromToken : any
  user = new User();
  data:any


  constructor(private formBuilder: FormBuilder,
              private userService : UserService,
              private route: ActivatedRoute,
              private router : Router) { }

  createForm(){
    this.form = this.formBuilder.group({
    fname:['' , [Validators.required , Validators.minLength(3)]],
    lname:['' , [Validators.required , Validators.minLength(3)]],
    email:['' , [Validators.required ,Validators.email]],
    password:['' , [Validators.required ,Validators.minLength(6)]],
    city:['' , [Validators.required , Validators.minLength(3)]],
    street:['' , [Validators.required , Validators.minLength(3)]],
    phone:['' , [Validators.required , Validators.minLength(11)]],
    });
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);

    this.createForm();
    if(this.token){
      this.userDataFromToken = jwt_decode(this.token);
    }
    this.getData();
  }

  updateUser(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    else{
      this.userService.updateUser(this.userDataFromToken.user_id , this.user).subscribe(res => {
      });
    }
  }

  get f(){
    return this.form.controls
  }

  getData(){
    this.userService.getUserById(this.userDataFromToken.user_id).subscribe(res => {
      console.log(res);
      this.data = res
      this.user.fname = this.data.fname;
      this.user.lname = this.data.lname;
      this.user.email = this.data.email;
      this.user.password = this.data.password;
      this.user.city = this.data.city;
      this.user.street = this.data.street;
      this.user.phone = '0'+this.data.phone;
    });
  }

}

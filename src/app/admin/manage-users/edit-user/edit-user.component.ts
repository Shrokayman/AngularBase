import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  form!:FormGroup;
  submitted =false;
  token :any = localStorage.getItem('token');
  userDataFromToken : any
  user = new User();
  data:any
  id: any;
  roles :any = [
    { id: 1, name: "admin" },
    { id: 2, name: "user" },
  ];


  constructor(private formBuilder: FormBuilder,
              private userService : UserService,
              private route: ActivatedRoute,
              private router : Router) { 
                
              }

  createForm(){
    this.form = this.formBuilder.group({
    fname:['' , [Validators.required , Validators.minLength(3)]],
    lname:['' , [Validators.required , Validators.minLength(3)]],
    email:['' , [Validators.required ,Validators.email]],
    password:['' , [Validators.required ,Validators.minLength(6)]],
    city:['' , [Validators.required , Validators.minLength(3)]],
    street:['' , [Validators.required , Validators.minLength(3)]],
    phone:['' , [Validators.required , Validators.minLength(11)]],
    role:['' , [Validators.required]],
    });
  }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
    this.createForm();
    this.getData();
  }

  updateUser(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    else{
      this.userService.updateUser(this.id , this.user).subscribe(res => {
        this.router.navigate(['/admin/users'])
        return alert("User Updated Succesfully");
      });
    }
  }

  get f(){
    return this.form.controls
  }

  getData(){
    this.userService.getUserById(this.id).subscribe(res => {
      console.log(res);
      this.data = res
      this.user.fname = this.data.fname;
      this.user.lname = this.data.lname;
      this.user.email = this.data.email;
      this.user.password = this.data.password;
      this.user.city = this.data.city;
      this.user.street = this.data.street;
      this.user.role = this.data.role;
      this.user.phone = '0'+this.data.phone;
    });
  }
}


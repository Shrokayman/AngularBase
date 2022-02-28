import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any;
  form!:FormGroup;
  submitted = false;
  data:any;
  token:any;
  constructor(private formBuilder: FormBuilder,
    private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm(){
    this.form = this.formBuilder.group({
      email:['' , [Validators.required ,Validators.email]],
      password:['' , [Validators.required ,Validators.minLength(6)]],
    })
  }

  submit(){
    this.submitted = true
    if(this.form.invalid){
      return
    }
    else{
      this.userService.login(this.form.value).subscribe(res =>{
        this.data = res;
        if(this.data['status'] === 1){
          this.token = this.data.data.token
          localStorage.setItem('token' ,`Bearer ${this.token}`)
          this.userData = jwt_decode(this.token)
          if(this.userData['user_role'] == "admin"){
            this.router.navigate(['/admin']);
          }
          else{
            this.router.navigate(['']);
          }
        }
        else{
          alert(JSON.stringify(this.data.message));
        }

      })
    }
  }

  get f(){
    return this.form.controls
  }

}

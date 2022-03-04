import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
import { MustMatch } from 'src/app/_validations/confirmed.validator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  submitted =false;
  data:any;


  constructor(private formBuilder: FormBuilder,
              private userService : UserService,
              private toastr: ToastrService,
              private router : Router) { }

  createForm(){
    this.form = this.formBuilder.group({
      fname:['' , [Validators.required , Validators.minLength(3)]],
      lname:['' , [Validators.required , Validators.minLength(3)]],
      email:['' , [Validators.required ,Validators.email]],
      password:['' , [Validators.required ,Validators.minLength(6)]],
      confirmPassword:['' , Validators.required],
      city:['' , [Validators.required , Validators.minLength(3)]],
      street:['' , [Validators.required , Validators.minLength(3)]],
      phone:['' , [Validators.required , Validators.minLength(3)]],
    },{
      validator : MustMatch('password','confirmPassword')
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  submit(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    else{
        this.userService.registerUser(this.form.value).subscribe(res =>{
        this.data = res;

        if(this.data['status'] === 1){
          alert(this.data.message);
          this.router.navigate(['/login']);
        }
        else{
          console.log(res);
          alert(this.data.message);
        }

        this.submitted = false;
        this.form.get('fname')?.reset();
        this.form.get('lname')?.reset();
        this.form.get('email')?.reset();
        this.form.get('password')?.reset();
        this.form.get('confirmPassword')?.reset();
        this.form.get('city')?.reset();
        this.form.get('street')?.reset();
        this.form.get('phone')?.reset();
      })
    }
  }

  get f(){
    return this.form.controls
  }


}

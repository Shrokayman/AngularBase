import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:any = localStorage.getItem('token')
  userData :any;

  constructor(private router :Router) { }

  ngOnInit(): void {
    if(this.token){
      this.userData = jwt_decode(this.token);
    }
  }


  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}

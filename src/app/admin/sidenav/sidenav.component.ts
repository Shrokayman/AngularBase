import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  token : any =localStorage.getItem('token');
  userData :any;

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(this.token){
      this.userData = jwt_decode(this.token);
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
  }

}

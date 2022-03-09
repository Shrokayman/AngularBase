import { KartService } from 'src/app/_service/kart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CartService } from 'src/app/_service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Kart } from 'src/app/_models/kart';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any = localStorage.getItem('token')
  userData: any;
  public totalItem: number = 0;
  public searchTerm !: string;
  carts: any;
  cart = new Kart();
  id: any;
  constructor(private router: Router, private cartService: CartService, private route: ActivatedRoute, private kartservice: KartService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    if (this.token) {
      this.userData = jwt_decode(this.token);
    }
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
    this.getCarts();
  }


  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  getCarts() {
    this.kartservice.getCarts().subscribe(res => {
      this.carts = res;
      console.log(res);
    });
  }
  getCart() {
    this.kartservice.getCart(this.id).subscribe(res => {
      this.carts = res;
      console.log(res);

    });
  }
}

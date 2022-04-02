import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';
import { OrderService } from 'src/app/_service/order.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  imageDirectoryPath : any ='http://127.0.0.1:8000/storage/products/';
  id: any;
  // orders = new Order;
  orders:any =[];
  constructor(private orderservice: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getOrder();
  }

  getOrder() {
    this.orderservice.getOrder(this.id).subscribe((res) => {
      this.orders = res;

      console.log(this.orders);

    });
  }

}

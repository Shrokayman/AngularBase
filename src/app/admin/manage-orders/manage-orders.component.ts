import { OrderDetailsComponent } from './order-details/order-details.component';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_service/order.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { Order, orderInterface, OrderStatus } from 'src/app/_models/order';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  id: any;
  orders: any;
  order = new Order();
  status = OrderStatus;
  p: any;
  data: any;

  constructor(private orderservice: OrderService, private router: Router, private ngxpaginationModule: NgxPaginationModule, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getAllOrders();

  }

  getAllOrders() {
    this.orderservice.getOrders().subscribe(res => {
      this.orders = res;
      console.log(res);

    });
  }

  getOrder() {
    this.orderservice.getOrder(this.id).subscribe(res => {
      this.orders = res;
    });
  }
  deleteOrder(id: number) {
    if (confirm("Are you sure you want to delete ")) {
      this.orderservice.deleteOrder(id).subscribe(res => {
      });
    }
    return;
  }

  createOrder() {
    this.orderservice.createOrder(this.order).subscribe(res => {
      console.log(res);
    });
  }

  updateOrder(id: number, data: orderInterface) {
    this.orderservice.updateOrder(id, data).subscribe(res => {
      this.getAllOrders();
    });
  }

}

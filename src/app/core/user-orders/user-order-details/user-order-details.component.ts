import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/_service/order.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.css']
})
export class UserOrderDetailsComponent implements OnInit {
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

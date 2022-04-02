import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order, orderInterface } from '../_models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(){

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/orders',{ headers: header });

  }

  createOrder(data:orderInterface) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.post('http://127.0.0.1:8000/api/orders', data, { headers: header });

  }

  updateOrder(id : number, data : any){

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.put('http://127.0.0.1:8000/api/orders/'+id, data, { headers: header });

  }

  getOrder(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/order/'+id, { headers: header });

  }
  deleteOrder(id: number) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.delete('http://127.0.0.1:8000/api/orders/'+id, { headers: header });

  }


  searchOrders(data: any) {

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.post('http://127.0.0.1:8000/api/orders/search', data), ({ headers: header });

  }
}

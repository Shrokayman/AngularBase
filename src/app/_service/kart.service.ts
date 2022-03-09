import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user.model';


@Injectable({
  providedIn: 'root'
})
export class KartService {

  constructor(private httpClient: HttpClient) { }

  getCarts(){

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/carts', { headers: header })
  }

  getCart(id: number){

    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })

    return this.httpClient.get('http://127.0.0.1:8000/api/carts/'+id,{ headers: header })
  }
}

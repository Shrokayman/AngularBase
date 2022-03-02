import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Brand } from '../_models/brand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  getBrandData(){
    // let header = new HttpHeaders({
    //   Authorization: localStorage.getItem('token')!
    // })
    // return this.http.get(environment.apiUrl+'/brands', {headers:header});
    return this.http.get('http://127.0.0.1:8000/api/brands')
  }
  addData(data:Brand){
        // let header= new HttpHeaders({
    //   Authorization: localStorage.getItem('token')!
    // })
    // return this.http.post(environment.apiUrl+'/categories', {headers:header}, data);
    return this.http.post('http://127.0.0.1:8000/api/brands',data);
  }
  deleteData(id:any){
    // return this.http.delete('http://127.0.0.1:8000/api/brands/'+id);
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.delete(environment.apiUrl+'/brands/'+id, {headers:header});
  }
  }

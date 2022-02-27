import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../_models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  getBrandData(){
    return this.http.get('http://127.0.0.1:8000/api/brands')
  }
  addData(data:Brand){
    return this.http.post('http://127.0.0.1:8000/api/brands',data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/brands/'+id);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../_models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/categories')
    // let header = new HttpHeaders({
    //   Authorization: localStorage.getItem('token')!
    // })
    // return this.http.get(environment.apiUrl+'/categories', {headers:header});
  }
  addData(data:Category){
    // let header= new HttpHeaders({
    //   Authorization: localStorage.getItem('token')!
    // })
    // return this.http.post(environment.apiUrl+'/categories', {headers:header}, data);
    return this.http.post('http://127.0.0.1:8000/api/categories',data);
  }
  deleteData(id:any){
    // return this.http.delete('http://127.0.0.1:8000/api/categories/'+id);
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.delete(environment.apiUrl+'/categories/'+id, {headers:header});
  }
  }


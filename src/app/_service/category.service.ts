import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://127.0.0.1:8000/api/categories')
  }
  addData(data:Category){
    return this.http.post('http://127.0.0.1:8000/api/categories',data);
  }
  deleteData(id:any){
    return this.http.delete('http://127.0.0.1:8000/api/categories/'+id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http:HttpClient) { }

  addData(product_id:any,user_id:any){
    return this.http.post('http://127.0.0.1:8000/api/userproducts',{product_id,user_id});
  }

  removeData(product_id:any,user_id:any){
    return this.http.delete('http://127.0.0.1:8000/api/userproducts/'+product_id+'/'+user_id);
  }


getData(user_id:any){
  return this.http.get('http://127.0.0.1:8000/api/userproducts/'+user_id);
}



}

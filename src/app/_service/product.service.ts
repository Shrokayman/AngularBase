import { Product } from 'src/app/_models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Observable subtype for searching from the search box
  public search = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) {
  }

  getProducts(){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/products');
   }

  deleteProduct(id:number){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.delete(environment.apiUrl+'/products/'+id, {headers:header});
  }


  insertProduct(data :any) {
    return this.http.post(environment.apiUrl+'/products', data);
  }

  getProductById(id:number) {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/products/'+id, { headers: header });

  }
  updateProduct( id : number, data:Product ){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.put(environment.apiUrl+'/products/'+id ,data , {headers:header});
  }
  showRelated(id:number){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/products/show/'+id  , {headers:header});
  }

  topProducts(){
    return this.http.get('http://127.0.0.1:8000/api/topproducts');
  }
  getAvgRateProductById(id:number) {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/products/rate/'+id,{headers:header});
  }
  checkproductbyId(id:number) {
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/products/wishlist/'+id,{headers:header});
  }
}

import { Product } from 'src/app/_models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }
  
  getProducts(){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/products', {headers:header}); 
   }
  
  deleteProduct(id:number){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.delete(environment.apiUrl+'/products/'+id, {headers:header});
  }
  
  
  insertProduct(product:Product) {
    return this.http.post(environment.apiUrl+'/products', product);     
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

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../_models/product.model';
import { Review } from '../_models/review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }
  getReviews(){
    return this.http.get(environment.apiUrl+'/reviews');
   }

  addRate(product_id:any,user_id:any,rate:any){

    return this.http.post(environment.apiUrl+'/products/rate',{product_id,user_id,rate});
  }


}

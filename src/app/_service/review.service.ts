import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  http: any;

  constructor() { }
  getReviewss(){

    return this.http.get(environment.apiUrl+'/reviews');
   }

}

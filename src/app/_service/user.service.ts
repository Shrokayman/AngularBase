import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(data: any){
    return this.http.post(environment.apiUrl+'/register/' , data);
  }

  login(data: any){
    return this.http.post(environment.apiUrl+'/login/' , data)
  }

  getUserById(id : number){
    return this.http.get(environment.apiUrl+'/users/'+id);
  }

  updateUser( id : number, data:any ){
    return this.http.put(environment.apiUrl+'/users/'+id ,data);
  }
}

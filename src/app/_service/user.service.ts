import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAllUsers(){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/users', {headers:header});
  }

  getUserById(id : number){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.get(environment.apiUrl+'/users/'+id , {headers:header});
  }

  updateUser( id : number, data:any ){
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.put(environment.apiUrl+'/users/'+id ,data , {headers:header});
  }
  deleteUser( id : number){
    // return this.http.delete(environment.apiUrl+'/users/'+id);
    let header = new HttpHeaders({
      Authorization: localStorage.getItem('token')!
    })
    return this.http.delete(environment.apiUrl+'/users/'+id, {headers:header});
  }
}

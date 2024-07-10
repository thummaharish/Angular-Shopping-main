import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 

  constructor(private http: HttpClient) { }

 

  GetUsers(){
    return this.http.get(`https://test-server-qs1n.onrender.com/users`)
  }

  RegisterUser(user : any){
    return this.http.post(`https://test-server-qs1n.onrender.com/users/`, user)
  }

  

}

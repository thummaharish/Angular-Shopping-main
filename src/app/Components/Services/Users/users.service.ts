import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 

  constructor(private http: HttpClient) { }

 

  GetUsers(){
    return this.http.get(`http://localhost:7200/user`)
  }

  RegisterUser(user : any){
    return this.http.post(`http://localhost:7200/user/`, user)
  }

  GetAdmins(){
    return this.http.get(`http://localhost:7200/admin`) 
  }

}

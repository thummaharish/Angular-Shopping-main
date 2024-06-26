import { Injectable, inject } from '@angular/core';
import { UsersService } from '../Users/users.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any
  isLogged: Boolean = false
  // usersApi: any;
  constructor(private usersApi: UsersService) { }
  // usersApi = inject(UsersService)
  loginAuth(email: string, password: string) :Observable<any> {
    return this.usersApi.GetUsers().pipe(
      map((res : any) => {
        const users = res;
        const user = users.find((person : any) => person.email === email && person.password === password);
        if (user) {
          this.isLogged = true;
          console.log('is logged in', this.isLogged)
        } else {
          this.isLogged = false; 
          console.log('is logged in', this.isLogged)
        }
        return user;
      })
    );
  }

  logoutAuth() {
    this.isLogged = false
    console.log('is logged in', this.isLogged)

  }

  isAuthenticated() {
    console.log('is logged in', this.isLogged)

    return this.isLogged
  }



}



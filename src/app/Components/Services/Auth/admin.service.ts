import { Injectable } from '@angular/core';
import { UsersService } from '../Users/users.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  admins: any
  isLogged: Boolean = false
 
  constructor(private adminApi: UsersService, private http: HttpClient) { }
  // start chat api


  updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`http://localhost:7200/addproducts/${id}`, product);
  }


  // end chat api

  RegisterAdmin(admin : any){
    return this.http.post(`http://localhost:7200/admin/`, admin)
  }

  AdminGetProducts(){
    return this.http.get(`http://localhost:7200/addproducts`)
  }

  AdminGetProductsById(id : any){
    return this.http.get(`http://localhost:7200/addproducts/${id}`)
  }

  AdminAddProduct(data : any){
    return this.http.post(`http://localhost:7200/addproducts`,data)
    
  }

  AdminDeleteProduct(id:any){
    return this.http.delete(`http://localhost:7200/addproducts/${id}`)
  }

  AdminloginAuth(email: string, password: string) :Observable<any> {
    return this.adminApi.GetAdmins().pipe(
      map((res : any) => {
        const admins = res;
        const admin = admins.find((person : any) => person.email === email && person.password === password);
        if (admin) {
          this.isLogged = true;
          console.log('is logged in', this.isLogged)
        } else {
          this.isLogged = false; 
          console.log('is logged in', this.isLogged)
        }
        return admin;
      })
    );
  }

  AdminLogoutAuth() {
    this.isLogged = false
  }

  AdminIsAuthenticated() {
    return this.isLogged
  }



}

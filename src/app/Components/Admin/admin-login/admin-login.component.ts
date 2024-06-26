import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../Services/Auth/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit {

  adminForm !: FormGroup

  constructor(private FB:FormBuilder, private adminAthService : AdminService, private router : Router){}

  ngOnInit(): void {
    this.adminForm = this.FB.group({
  
      email:['',[ Validators.email, Validators.required]],
      password:['',[  Validators.required]],

    })
  }

  Login(){

    let email = this.adminForm.value.email
    let password = this.adminForm.value.password

  
    this.adminAthService.AdminloginAuth(email, password).subscribe((admin : any) => {
      console.log('user in login component', admin);

      if(admin === undefined || !admin){
        alert('The Admin credentials you have entered are not correct');
      } else {
        // localStorage.setItem('adminDetails', JSON.stringify(admin))
        alert(`Welcome! Admin  logged in`);
        this.router.navigate(['/adminlogin/adminhome']);
      }
    },
    (error) => {
      console.error('Login error', error);
      alert('An error occurred during admin login');
    })

    
 
  }
  
}

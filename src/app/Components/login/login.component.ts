import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup

  constructor(private FB:FormBuilder, private authServise : AuthService, private router : Router){}

  ngOnInit(): void {
    this.loginForm = this.FB.group({
  
      email:['',[ Validators.email, Validators.required]],
      password:['',[  Validators.required]],

    })
  }

  Login(){

    let email = this.loginForm.value.email
    let password = this.loginForm.value.password

    // let user = this.authServise.loginAuth(email, password)

    

    this.authServise.loginAuth(email, password).subscribe((user : any) => {
      console.log('user in login component', user);

      if(user === undefined || !user){
        alert('The login credentials you have entered are not correct');
      } else {
        alert(`Welcome! You are logged in`);
        localStorage.setItem('userDetails',JSON.stringify(user))
        this.router.navigate(['/']);
      }
    },
    (error) => {
      console.error('Login error', error);
      alert('An error occurred during login');
    })

    
 
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../Services/Users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup
  image !: string 

  constructor(private FB: FormBuilder, private http: HttpClient, private usersApi : UsersService) { }

  ngOnInit(): void {
    this.registerForm = this.FB.group({
      name: ['', [Validators.minLength(6), Validators.maxLength(15), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      mobile: ['', [Validators.pattern(/^\d{10}$/),Validators.required]],
      profile: [null]
    })
  }

  uploadProfile(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        // this.image = event.target.result 
        this.image = reader.result as string
        console.log('image', reader.result)
        this.registerForm.get('profile')?.setValue(reader.result);
      }
       // this.imageForm.get('image')?.setValue(file);
    }else{
      this.image = ''
    }

  }

  Register() {

    if(this.image){
      this.usersApi.RegisterUser(this.registerForm.value).subscribe(res=>console.log('register post details', res))
    }else{
      alert('upload image')
    }
  }
}

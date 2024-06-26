import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../Services/Auth/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent  implements OnInit {

  adminRegisterForm !: FormGroup
  image !: string 

  constructor(private FB:FormBuilder, private adminAthService : AdminService, private router : Router){}

  ngOnInit(): void {
    this.adminRegisterForm = this.FB.group({
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
        this.adminRegisterForm.get('profile')?.setValue(reader.result);
      }
       // this.imageForm.get('image')?.setValue(file);
    }else{
      this.image = ''
    }

  }

  AdminRegister(){

    if(this.image){
      this.adminAthService.RegisterAdmin(this.adminRegisterForm.value).subscribe(res=>console.log('register post details', res))

      this.router.navigate(['/adminlogin'])
    }else{
      alert('upload image')
    }
  }
  
}


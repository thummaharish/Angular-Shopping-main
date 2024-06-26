import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../Services/Auth/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  AddProductForm !: FormGroup
  image !: string 

  constructor(private FB: FormBuilder, private http: HttpClient, private AdminAuthService : AdminService, private router : Router) { }

  ngOnInit(): void {
    this.AddProductForm = this.FB.group({
      productName: ['', [Validators.minLength(6), Validators.maxLength(15), Validators.required]],
      category: ['', [ Validators.required]],
      price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      image: [null]
    })
  }

  uploadProductImage(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.image = reader.result as string
        console.log('image', reader.result)
        this.AddProductForm.get('image')?.setValue(reader.result);
      }
    
    }else{
      this.image = ''
    }

  }

  AddProduct() {

    if(this.image){
      this.AdminAuthService.AdminAddProduct(this.AddProductForm.value).subscribe(res=>console.log('added product details', res))
      this.router.navigate(['/adminlogin/adminhome'])
    }else{
      alert('upload image')
    }
  }
}


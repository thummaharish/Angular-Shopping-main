import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/Auth/admin.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  allproducts !: any

  constructor(private adminService: AdminService, private FB: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getProducts()

  }

  getProducts() {
    this.adminService.AdminGetProducts().subscribe(res => this.allproducts = res)

  }

  getProductsbyID(id: any) {
    this.adminService.AdminGetProductsById(id).subscribe(res => console.log(res))
  }


  deleteProduct(id: any) {
    this.adminService.AdminDeleteProduct(id).subscribe(res => {
      console.log(res);
      this.getProducts()
    })

  }



}



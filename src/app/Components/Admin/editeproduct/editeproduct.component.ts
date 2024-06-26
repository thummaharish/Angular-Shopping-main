import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../Services/Auth/admin.service';

@Component({
  selector: 'app-editeproduct',
  templateUrl: './editeproduct.component.html',
  styleUrl: './editeproduct.component.css'
})
export class EditeproductComponent implements OnInit {
EditForm !: NgForm
updatedProduct : any = {}
image !: string

productId !:any

constructor(private activatedRoute : ActivatedRoute, private adminService:AdminService, private router:Router){}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(res =>{
    console.log(res.get('productId'))
    this.productId = res.get('productId')
  })

  this.GetProductById()
}

GetProductById(){
  this.adminService.AdminGetProductsById(this.productId).subscribe(res=>{
    console.log('product by id', res)
    this.updatedProduct = res
    
  })
}





updateProduct(){
  let product = {
    productName : this.updatedProduct.productName,
    category : this.updatedProduct.category,
    price : this.updatedProduct.price,
    quantity : this.updatedProduct.quantity,
    image : this.updatedProduct.image,
  }

  this.adminService.updateProduct(this.productId, product).subscribe(res => {
    console.log('edited product', res)
    this.router.navigate(['/adminlogin/adminhome'])
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

      this.updatedProduct.image = reader.result as string;
      // this.AddProductForm.get('image')?.setValue(reader.result);
    }
  
  }else{
    this.image = ''
    this.updatedProduct.image = '';
  }

}

}

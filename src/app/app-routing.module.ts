import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartitemsComponent } from './Components/cartitems/cartitems.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { AdminCanActivateGuard } from './Components/Guards/AdminGuard/AdminCanActivate.guard';
import { userGuard } from './Components/Guards/UserGuard/user.guard';
import { EditeproductComponent } from './Components/Admin/editeproduct/editeproduct.component';
import { HomeProductsComponent } from './Components/home-products/home-products.component';
import { ProductByidComponent } from './Components/product-byid/product-byid.component';
import { AdminRegisterComponent } from './Components/Admin/admin-register/admin-register.component';



const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: HomeProductsComponent },
  { path: 'product/:Id', component: ProductByidComponent },
  { path: 'cartitems', component: CartitemsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  {
    path: 'adminlogin', children: [
      { path: 'addproduct', component: AddProductComponent },
      { path: 'adminregister', component: AdminRegisterComponent },
      { path: 'editproduct/:productId', component: EditeproductComponent },
      // { path: 'adminhome', component: AdminComponent},
      { path: 'adminhome', component: AdminComponent, canActivate: [AdminCanActivateGuard] },


    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

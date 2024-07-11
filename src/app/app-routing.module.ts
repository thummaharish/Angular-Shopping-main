import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartitemsComponent } from './Components/cartitems/cartitems.component';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { userGuard } from './Components/Guards/UserGuard/user.guard';
import { HomeProductsComponent } from './Components/home-products/home-products.component';

import { ProductByIdComponent } from './Components/product-by-id/product-by-id.component';





const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeProductsComponent },
  { path: 'product/:productId', component: ProductByIdComponent },
  { path: 'cartitems', component: CartitemsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

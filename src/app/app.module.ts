import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CartReducer } from './Components/Store/CartStore/cart.reducer';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CartitemsComponent } from './Components/cartitems/cartitems.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './Components/Admin/admin/admin.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { EditeproductComponent } from './Components/Admin/editeproduct/editeproduct.component';
import { HomeProductsComponent } from './Components/home-products/home-products.component';
import { ProductByidComponent } from './Components/product-byid/product-byid.component';
import { AdminRegisterComponent } from './Components/Admin/admin-register/admin-register.component';






@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartitemsComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    AddProductComponent,
    AdminLoginComponent,
    EditeproductComponent,
    HomeProductsComponent,
    ProductByidComponent,
    AdminRegisterComponent,
    
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
RouterModule,

  
    
   StoreModule.forRoot({CartReducer:CartReducer})
    
  ],
  providers: [
    provideClientHydration(), provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

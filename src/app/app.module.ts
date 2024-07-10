import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { CartReducer } from './Components/Store/CartStore/cart.reducer';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CartitemsComponent } from './Components/cartitems/cartitems.component';
import {FormsModule, NgModel, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './Components/Register/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { provideRouter, Router, RouterModule,Routes } from '@angular/router';

import { HomeProductsComponent } from './Components/home-products/home-products.component';
import { ProductByIdComponent } from './Components/product-by-id/product-by-id.component';







@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartitemsComponent,
    RegisterComponent,
    LoginComponent,
    HomeProductsComponent,
    ProductByIdComponent
   
    
  
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
    provideClientHydration(), provideHttpClient(withFetch()), 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

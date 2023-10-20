import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomInterceptor } from './services/custom.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer } from './reducer/profile.reducer';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardProductsComponent } from './components/dashboard/dashboard-products/dashboard-products.component';
import { DashboardUsersComponent } from './components/dashboard/dashboard-users/dashboard-users.component';
import { DashboardAddProductComponent } from './components/dashboard/dashboard-add-product/dashboard-add-product.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard-home/dashboard-home.component';
import { OrderComponent } from './components/order/order.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    SingleProductComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DashboardProductsComponent,
    DashboardUsersComponent,
    DashboardAddProductComponent,
    DashboardHomeComponent,
    OrderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ profile: profileReducer }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 3000, // Set the toast duration in milliseconds
    positionClass: 'toast-top-right',}),
    FormsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS, useClass : CustomInterceptor, multi : true
  }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { FriendsComponent } from './friends/friends.component';
import { ProductDetailsCardformatComponent } from './product-details-cardformat/product-details-cardformat.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { FormsModule } from '@angular/forms';
import { DeptDetailsComponent } from './dept-details/dept-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    FriendsComponent,
    ProductDetailsCardformatComponent,
    BuyProductComponent,
    DeptDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

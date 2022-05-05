import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { FriendsComponent } from './friends/friends.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { FormsModule } from '@angular/forms';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { StudentComponent } from './student/student.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SortOptionsComponent } from './sort-options/sort-options.component';
import { StudentGradesComponent } from './student-grades/student-grades.component';
import { GradePipe } from './grade.pipe';
import { EmpSalRangePipe } from './emp-sal-range.pipe';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RemoteUsersComponent } from './remote-users/remote-users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptorService } from './custom-http-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    FriendsComponent,
    BuyProductComponent,
    DeptDetailsComponent,
    StudentComponent,
    ProductListComponent,
    SortOptionsComponent,
    StudentGradesComponent,
    GradePipe,
    EmpSalRangePipe,
    FancyCardComponent,
    MySkillsComponent,
    TodoListComponent,
    RemoteUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: CustomHttpInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

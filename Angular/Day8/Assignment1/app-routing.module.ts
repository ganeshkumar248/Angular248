import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSpaComponent } from './about-spa/about-spa.component';
import { CategoryComponent } from './category/category.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'about-page', component: AboutSpaComponent},
  {path: 'contact-details', component: ContactDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product-list/:category', component: ProductListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   
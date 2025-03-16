import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'nav_bar_page', component: NavBarComponent },
  { path: 'app-sign-up', component: SignUpComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-catigories', component: CatigoriesComponent },
  { path: 'app-product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

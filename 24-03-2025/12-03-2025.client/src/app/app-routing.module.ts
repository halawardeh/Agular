import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCatigoryComponent } from './add-catigory/add-catigory.component';
import { StructureComponent } from './structure/structure.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { EditProducComponent } from './edit-produc/edit-produc.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { VoucherComponent } from './voucher/voucher.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { UpdateVoucherComponent } from './update-voucher/update-voucher.component';


const routes: Routes = [
  { path: 'nav_bar_page', component: NavBarComponent },
  { path: 'app-sign-up', component: SignUpComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-catigories', component: CatigoriesComponent },
  { path: 'app-product', component: ProductComponent },
  { path: 'app-product/:id', component: ProductComponent },
  { path: 'app-add-product', component: AddProductComponent },
  { path: 'app-add-catigory', component: AddCatigoryComponent },
  { path: 'app-structure', component: StructureComponent },
  { path: 'app-parent', component: ParentComponent },
  { path: 'app-child', component: ChildComponent },
  { path: 'app-edit-cat/:id', component: EditCatComponent },
  { path: 'app-edit-produc/:id', component: EditProducComponent },
  { path: 'app-profile', component: ProfileComponent },
  { path: 'app-edit-profile', component: EditProfileComponent },
  { path: 'app-voucher', component: VoucherComponent },
  { path: 'app-add-voucher', component: AddVoucherComponent },
  { path: 'app-update-voucher/:id', component: UpdateVoucherComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

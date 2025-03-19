import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CatigoriesComponent } from './catigories/catigories.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCatigoryComponent } from './add-catigory/add-catigory.component';
import { StructureComponent } from './structure/structure.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './parent/child2/child2.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignUpComponent,
    LoginComponent,
    CatigoriesComponent,
    ProductComponent,
    AddProductComponent,
    AddCatigoryComponent,
    StructureComponent,
    ParentComponent,
    ChildComponent,
    Child2Component,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

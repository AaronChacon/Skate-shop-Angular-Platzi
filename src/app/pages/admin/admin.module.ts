import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modules
import { AdminRoutingModule } from './admin.routing';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from '../../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsCatalogComponent } from './components/products-catalog/products-catalog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    ProductFormComponent, 
    NavComponent, 
    TableComponent, 
    DashboardComponent, ProductsCatalogComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }

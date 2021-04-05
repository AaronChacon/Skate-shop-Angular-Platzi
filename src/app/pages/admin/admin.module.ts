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


@NgModule({
  declarations: [
    ProductFormComponent, 
    NavComponent, 
    TableComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }

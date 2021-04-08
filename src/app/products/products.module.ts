import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Module
import { ProductsRoutingModule } from './products.routing';
import { MaterialModule } from '../material/material.module';
//Components
import { ProductDataComponent } from './components/product-data/product-data.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsLayoutComponent } from './components/products-layout/products-layout.component';


@NgModule({
  declarations: [
    ProductDataComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductsLayoutComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule
  ]
})
export class ProductsModule { }

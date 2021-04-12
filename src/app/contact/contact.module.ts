import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact.routing';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
  LayoutComponent,
  ListComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class ContactModule { }

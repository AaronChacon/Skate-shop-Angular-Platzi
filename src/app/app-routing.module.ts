import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutComponent ,   
    children:  [
      {
        path: '',
        redirectTo: 'home', 
        pathMatch: 'full',
      },
      {
        path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
      },
      /* {
        path: 'products/:id', component: ProductDetailComponent ,
      }, */
      {
        path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
      },
    ]
  },
  {
    path: '**', loadChildren: () => import('./pages/page-not-found/page-not-fount.module').then(m => m.PageNotFountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

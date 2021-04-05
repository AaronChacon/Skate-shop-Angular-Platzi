import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Components
import { LayoutComponent } from './layout/layout.component';
// Guard
import { AdminGuard } from './core/guard/admin.guard';

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
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'products', 
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'contact', 
        canActivate: [ AdminGuard ],
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule),
      },
    ]
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '**', 
    loadChildren: () => import('./pages/page-not-found/page-not-fount.module').then(m => m.PageNotFountModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

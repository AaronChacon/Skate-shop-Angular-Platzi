import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Components
import { LayoutComponent } from './layout/layout.component';
// Guard
import { AdminGuard } from './core/guard/admin.guard';
import { PreloadService } from './core/services/preload.service';
import { QuicklinkStrategy } from 'ngx-quicklink';

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
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { preload: true }
      },
      {
        path: 'products', 
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
        data: { preload: true }
      },
      {
        path: 'contact', 
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
      },
    ]
  },
  {
    path: 'admin', 
    canActivate: [ AdminGuard ],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**', 
    loadChildren: () => import('./page-not-found/page-not-fount.module').then(m => m.PageNotFountModule),
  },
];

@NgModule({
  /* imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,  
    // preloadingStrategy: PreloadService,  
    // preloadingStrategy: QuicklinkStrategy,  
  })], */
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

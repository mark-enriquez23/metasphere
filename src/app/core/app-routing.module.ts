import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('src/app/modules/landing/landing.module').then( m => m.LandingModule)
  },
  {
    path: 'authenticate/login',
    loadChildren: () => import('src/app/modules/authentication/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'hotel-information',
    loadChildren: () => import('src/app/modules/hotel-information/hotel-information.module').then( m => m.HotelInformationModule)
  },
  {
    path: 'order',
    loadChildren: () => import('src/app/modules/order/order.module').then( m => m.OrderModule)
  },
  {
    path: 'pre-check',
    loadChildren: () => import('src/app/modules/pre-check/pre-check.module').then( m => m.PreCheckModule)
  },
  {
    path: 'main',
    loadChildren: () => import('src/app/modules/main/main.module').then( m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

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
    path: 'hotel-information',
    loadChildren: () => import('src/app/modules/hotel-information/hotel-information.module').then( m => m.HotelInformationModule)
  },
  {
    path: 'order',
    loadChildren: () => import('src/app/modules/order/order.module').then( m => m.OrderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

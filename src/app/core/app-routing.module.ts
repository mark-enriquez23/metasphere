import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';

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
    path: 'pre-check',
    loadChildren: () => import('src/app/modules/pre-check/pre-check.module').then( m => m.PreCheckModule)
  },
  {
    path: 'self-service',
    loadChildren: () => import('src/app/modules/self-service/self-service.module').then( m => m.SelfServiceModule)
  },
  {
    path: 'main',
    canActivate: [
      AuthGuardService,
    ],
    children: [
      {
        path: '',
        redirectTo: 'experience',
        pathMatch: 'full'
      },
      {
        path: 'experience',
        loadChildren: () => import('src/app/modules/main/main.module').then( m => m.MainModule)
      },
      {
        path: 'experience/:menu',
        loadChildren: () => import('src/app/modules/main/main.module').then( m => m.MainModule)
      },
      {
        path: 'order',
        loadChildren: () => import('src/app/modules/order/order.module').then( m => m.OrderModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

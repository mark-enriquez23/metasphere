import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfServiceGuardService } from 'src/app/core/guards/self-service/self-service-guard.service';

import { LoginComponent } from './layouts/login/login.component';
import { StepperComponent } from './layouts/stepper/stepper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pre-checkin',
    component: StepperComponent,
    canActivate: [
      SelfServiceGuardService,
    ],
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfServiceRoutingModule { }

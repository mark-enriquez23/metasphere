import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfServiceRoutingModule } from './self-service-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SelfServiceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SelfServiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Router module
import { LandingRoutingModule } from './landing-routing.module';

//Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

//Pages
import { LandingComponent } from './pages/landing/landing.component'

@NgModule({
  declarations: [LandingComponent],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }

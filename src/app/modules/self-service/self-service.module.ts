import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelfServiceRoutingModule } from './self-service-routing.module';
import { LoginComponent } from './layouts/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './layouts/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { NgStepperModule } from 'angular-ng-stepper';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { StepFourComponent } from './pages/step-four/step-four.component';
import { StepFiveComponent } from './pages/step-five/step-five.component';
import { StepSixComponent } from './pages/step-six/step-six.component';

@NgModule({
  declarations: [LoginComponent, StepperComponent, StepOneComponent, StepTwoComponent, StepThreeComponent, StepFourComponent, StepFiveComponent, StepSixComponent],
  imports: [
    CommonModule,
    SelfServiceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CdkStepperModule,
    NgStepperModule
  ]
})
export class SelfServiceModule { }

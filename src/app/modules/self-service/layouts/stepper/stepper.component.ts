import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  checkInForm: FormGroup;
  stepperMessage: String = '';

  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.setStepperMessage(0);
  }

  onStepChange(e): void {
    this.setStepperMessage(e.selectedIndex);
  }

  setStepperMessage(index): void {
    let message = ''
    switch (index) {
      case 0:
        message = 'Welcome to our pre check-in! Please verify the details below.'
        break;

      case 1:
        message = 'Why not treat yourself to something nice and make your stay perfect for that special ocasion.'
        break;

      case 2:
        message = 'Please enter the following information.'
        break;

      case 3:
        message = 'Please upload the following documents.'
        break;

      case 4:
        message = 'Almost there... Please enter the following information.'
        break;

      case 5:
        message = 'Please enter the following information. Note we may not be able to accomodate every special request.'
        break;

      default:
        break;
    }
    this.stepperMessage = message;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
  * Stepper Component
  */
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  /**
   * Check In Form
  * @type {FormGroup}
  */
  checkInForm: FormGroup;


  /**
   * Stepper Label Message
  * @type {String}
  */
  stepperMessage: String = '';

  /**
  * @ignore
  */
  constructor(private formBuilder: FormBuilder, ) { }

  /**
  * @ignore
  */
  ngOnInit(): void {
    this.setStepperMessage(0);
  }


  /**
   * On Step Change - sets the stepper Message
   *
   * @param  {any} e - The event to check
   * @returns void
   */
  onStepChange(e: any): void {
    this.setStepperMessage(e.selectedIndex);
  }


  /**
   * Set's the Stepper Label Message
   *
   * @param  {number} index - The index to check
   * @returns void
   *
   */
  setStepperMessage(index: number): void {
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {
  public stepFiveForm: FormGroup;
  public currentDate: any;
  public paymentType: string = 'Credit Card';

  constructor(private fb: FormBuilder) {
    this.setForm()
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() { return this.stepFiveForm.controls; }
  get formErrorHandler() { return this.stepFiveForm.status === 'INVALID' }

  ngOnInit(): void {
  }

  stepOneSubmit() {
  }

  setForm(): void {
    if (this.paymentType === 'Cash') {
      this.stepFiveForm = this.fb.group({
        payment_type: [this.paymentType, [Validators.required]]
      });
    } else {
      this.stepFiveForm = this.fb.group({
        payment_type: [this.paymentType, [Validators.required]],
        card_number: ['', [Validators.required]],
        ccv: ['', [Validators.required]],
        issued_date: ['', [Validators.required]],
        exp_date: ['', [Validators.required]],
      });
    }
  }

  numericField(event): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
}

}

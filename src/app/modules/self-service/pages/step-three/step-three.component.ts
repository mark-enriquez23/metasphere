import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  public stepThreeForm: FormGroup;
  public currentDate: any;

  constructor(private fb: FormBuilder) {
    this.stepThreeForm = this.fb.group({
      full_name: ['', [Validators.required]],
      gender_code: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      birth_place: ['', [Validators.required]],
      document_type: ['', [Validators.required]],
      document_number: ['', [Validators.required]],
      issued_date: ['', [Validators.required]],
      exp_date: ['', [Validators.required]],
    });
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() { return this.stepThreeForm.controls; }
  get formErrorHandler() { return this.stepThreeForm.status === 'INVALID' }

  ngOnInit(): void {
  }

  stepOneSubmit() {
  }
}

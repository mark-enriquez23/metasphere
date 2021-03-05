import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  public stepOneForm: FormGroup;
  public currentDate: any;

  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      reservation_number: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      check_in_date: ['', [Validators.required]],
      check_out_date: ['', [Validators.required]],
      room_nights: ['', [Validators.required]],
      num_adults: ['', [Validators.required]],
      num_child: ['', [Validators.required]],
      room_type: ['', [Validators.required]],
      room_rate: ['', [Validators.required]]
    });
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() { return this.stepOneForm.controls; }
  get formErrorHandler() { return this.stepOneForm.status === 'INVALID' }

  ngOnInit(): void {
  }

  stepOneSubmit() {
  }
}

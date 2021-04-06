import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  @Input() nationalitiesData: any
  public stepThreeForm: FormGroup;
  public currentDate: any;
  public user: any;
  public documentTypes = ['Passport', 'ID'];
  public genders = ['Male', 'Female'];

  constructor(private fb: FormBuilder,
    private preCheckinService: PreCheckinService) {
    this.user = this.preCheckinService.userBooking;

    this.stepThreeForm = this.fb.group({
      full_name: ['', [Validators.required]],
      gender_code: ['Male', [Validators.required]],
      dob: ['', [Validators.required]],
      nationality: ['Colombian', [Validators.required]],
      birth_place: ['', [Validators.required]],
      document_type: ['Passport', [Validators.required]],
      document_number: ['', [Validators.required]],
      issued_date: ['', [Validators.required]],
      exp_date: ['', [Validators.required]],
    });
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() { return this.stepThreeForm.controls; }
  get formErrorHandler() { return this.stepThreeForm.status === 'INVALID' }

  ngOnInit(): void {
    console.log(this.nationalitiesData)
  }

  stepOneSubmit() {
  }
}

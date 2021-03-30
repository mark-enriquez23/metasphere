import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  public stepOneForm: FormGroup;
  public currentDate: any;
  public user: any;

  constructor(private fb: FormBuilder, private preCheckinService: PreCheckinService) {
    this.user = this.preCheckinService.userBooking;
    this.stepOneForm = this.fb.group({
      reservation_number: [this.user.confirmation_number , [Validators.required]],
      first_name: ['' , [Validators.required]],
      last_name: ['', [Validators.required]],
      check_in_date: [this.user.arrivalDate, [Validators.required]],
      check_out_date: [ this.user.departureDate, [Validators.required]],
      room_nights: [this.user.numberOfUnits, [Validators.required]],
      num_adults: [this.user.adultcount, [Validators.required]],
      num_child: [this.user.childcount, [Validators.required]],
      room_type: [this.user.roomTypeShortDescription, [Validators.required]],
      room_rate: ['$' + this.user.roomCharge, [Validators.required]]
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

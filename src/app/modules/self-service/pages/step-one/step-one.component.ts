import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';
import * as moment from 'moment';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {
  public stepOneForm: FormGroup;
  public currentDate: any;
  public user: any;

  constructor(private fb: FormBuilder,
    private preCheckinService: PreCheckinService) {
    this.user = this.preCheckinService.userBooking;
    this.stepOneForm = this.fb.group({
      reservation_number: [this.user.confirmation_number ],
      first_name: [''],
      last_name: [''],
      check_in_date: [this.user.arrivalDate],
      check_out_date: [ this.user.departureDate],
      room_nights: [this.user.numberOfUnits],
      num_adults: [this.user.adultcount],
      num_child: [this.user.childcount],
      room_type: [this.user.roomTypeShortDescription],
      room_rate: ['$' + this.user.roomCharge]
    });
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() { return this.stepOneForm.controls; }
  get formErrorHandler() { return this.stepOneForm.status === 'INVALID' }

  ngOnInit(): void {

  }

  stepOneSubmit() {
  }

  exit(): void {
    this.preCheckinService.clearBookingData();
    location.reload();
  }
}

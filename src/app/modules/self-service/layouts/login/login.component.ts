import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';
import { SpinnerService } from 'src/app/shared/utilities/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private spinnerSrv: SpinnerService,
    private router: Router,
    private preCheckinSrv: PreCheckinService) { }

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      confirmationNumber: ['', [Validators.required]],
      confirmationNumberLastName: ['', [Validators.required]]
    });
  }

  get f() { return this.checkInForm.controls; }
  get formErrorHandler() { return this.f.confirmationNumber.errors || this.f.confirmationNumberLastName.errors;  }

  validateBooking(): void {
    if (!this.formErrorHandler) {
      this.spinnerSrv.show('Signing you in...');
      console.log(this.f);
      this.preCheckinSrv.fetchBooking(this.f.confirmationNumber.value, this.f.confirmationNumberLastName.value).then((res: any) => {
        console.log(res)
        this.preCheckinSrv.storeBooking(res);
        // this.router.navigateByUrl(environment.initial_page);
      }).finally(() =>{
        this.router.navigate(['pre-checkin']);
        this.spinnerSrv.hide()}
      );
    }
  }
}

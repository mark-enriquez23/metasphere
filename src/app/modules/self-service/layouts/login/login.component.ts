import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';
import { SpinnerService } from 'src/app/shared/utilities/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkInForm: FormGroup;
  /**
   * Dialog Reference
   *
   * @type {any}
   */
  dialogRef: any;

  constructor(private formBuilder: FormBuilder,
    private spinnerSrv: SpinnerService,
    private router: Router,
    private dialog: DialogService,
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
      this.spinnerSrv.show('Validating Booking...');
      console.log(this.f);
      this.preCheckinSrv.fetchBooking(this.f.confirmationNumber.value, this.f.confirmationNumberLastName.value).then((res: any) => {
        console.log(res)
        if (res.resultCode !== '-1') {
          this.preCheckinSrv.storeBooking(res);
          this.router.navigate(['pre-checkin']);
        } else {
          this.openErrorDialog()
        }
      }).finally(() => this.spinnerSrv.hide());
    }
  }


  openErrorDialog(): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Reservation Number or Last name is incorrect.',
        type: 'fail'
      }
    })
  }
}

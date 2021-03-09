import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent implements OnInit {
  public stepSixForm: FormGroup;
  public currentDate: any;
  public dialogRef: any;

  constructor(private fb: FormBuilder,
    private dialog: DialogService,
    private router: Router) {
    this.stepSixForm = this.fb.group({
      tel: ['', [Validators.required, Validators.pattern(`[- +()0-9]{6,}`)]],
      email: ['', [Validators.required, Validators.email]],
      special_request: ['', [Validators.required]],
    });
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() { return this.stepSixForm.controls; }
  get formErrorHandler() { return this.stepSixForm.status === 'INVALID' }

  ngOnInit(): void {
  }

  stepOneSubmit() {
  }

  openInformationDialog(): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: {
         message: 'You have successfully completed the pre-checkin A QR-code will be sent to your email addess. Please show this upon check-in.',
         type: 'information'
       }
     })
   }

   async completeCheckIn() {
    await this.openInformationDialog()
    this.dialogRef.afterClosed$.subscribe(res => {
      this.router.navigate(['landing']);
    });
  }
}

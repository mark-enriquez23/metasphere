import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { Component, OnInit, Renderer2  } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { Observable } from 'rxjs';
import { UploadDialogComponent } from 'src/app/shared/components/upload-dialog/upload-dialog/upload-dialog.component';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';
import { SaveDocumentsService } from 'src/app/shared/services/self-service/save-documents/save-documents.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  public stepFourForm: FormGroup;
  public state: string;
  public dialogRef: any;
  public user: any;

  constructor(private fb: FormBuilder,
    private elementRef: ElementRef,
    private render: Renderer2,
    private dialog: DialogService,
    private router: Router,
    private preCheckinService: PreCheckinService,
    private cdkStepperModule: CdkStepper,
    private saveDocumentsService: SaveDocumentsService) {
    this.user = this.preCheckinService.userBooking;
    this.stepFourForm = this.fb.group({
      validate: ['', Validators.required],
      orders: this.fb.array([])
    })

  }


  get f() {
    const control = this.stepFourForm.get('orders') as FormArray
    return control
  }
  get formErrorHandler() { return this.stepFourForm.status === 'INVALID' }


  addItem(form): void {
    const control = this.stepFourForm.get('orders') as FormArray
    control.push(form)
  }

  check() {
    console.log(this.stepFourForm)
  }

  ngOnInit(): void {
    this.user.prolist.forEach((element, index) => {
      const orderItem = this.fb.group({
        ...element,
        document: ['', [Validators.required]],
        documentBase64: ['', [Validators.required]],
      })
      this.addItem(orderItem)
    })
  }


  handleUpload(event, index): void {
      const fileName = event.target.files[0].name;
      const element = this.elementRef.nativeElement.querySelectorAll('.custom-file-label')[index];
      this.render.addClass(element,"selected");
      element.innerText = fileName;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.f.controls[index].get('document').setValue(file)
        this.f.controls[index].get('documentBase64').setValue(reader.result)
      };
  }

  openInformationDialog(): void {
    console.log('test')
    this.dialogRef = this.dialog.open(ConfirmDialogComponent)
   }

   upload(): void {
    this.dialogRef = this.dialog.open(UploadDialogComponent, {
      data: {
        files: this.f.value
      }
    })
    this.dialogRef.afterClosed$.subscribe(res => {
      if (res) {
        if (res.confirmed) {
          this.stepFourForm.get('validate').setValue('true');
          this.cdkStepperModule.next();
        }
      }
    });
   }
}

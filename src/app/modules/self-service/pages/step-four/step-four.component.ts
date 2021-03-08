import { ElementRef } from '@angular/core';
import { Component, OnInit, Renderer2  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  public stepFourForm: FormGroup;
  public state: string;
  public dialogRef: any;

  constructor(private fb: FormBuilder,
    private elementRef: ElementRef,
    private render: Renderer2,
    private dialog: DialogService,
    private router: Router) {
    this.stepFourForm = this.fb.group({
      passportAdult1: ['', [Validators.required]],
      passportAdult2: ['', [Validators.required]],
      passportChild1: ['', [Validators.required]],
      passportChild2: ['', [Validators.required]],
    });

  }


  ngOnInit(): void {
  }

  get f() { return this.stepFourForm.controls; }
  get formErrorHandler() { return this.stepFourForm.status === 'INVALID' }
  check() {


    console.log(this.stepFourForm)
  }

  handleUpload(event, formControlValue, index): void {
      const fileName = event.target.files[0].name;
      const element = this.elementRef.nativeElement.querySelectorAll('.custom-file-label')[index];
      this.render.addClass(element,"selected");
      element.innerText = fileName;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
          this.f[formControlValue].setValue(reader.result)
      };
  }

  openInformationDialog(): void {
    console.log('test')
    this.dialogRef = this.dialog.open(ConfirmDialogComponent)
   }
}

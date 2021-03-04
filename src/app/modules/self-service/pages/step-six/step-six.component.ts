import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.component.html',
  styleUrls: ['./step-six.component.scss']
})
export class StepSixComponent implements OnInit {
  public stepSixForm: FormGroup;
  state: string;

  constructor(private fb: FormBuilder) {
    this.stepSixForm = this.fb.group({
      phoneNumber: this.fb.control(''),
      email: this.fb.control('')
    });
  }


  ngOnInit(): void {
  }

}

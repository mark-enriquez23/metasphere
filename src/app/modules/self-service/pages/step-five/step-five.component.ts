import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.scss']
})
export class StepFiveComponent implements OnInit {
  public stepFiveForm: FormGroup;
  state: string;

  constructor(private fb: FormBuilder) {
    this.stepFiveForm = this.fb.group({
      phoneNumber: this.fb.control(''),
      email: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

}

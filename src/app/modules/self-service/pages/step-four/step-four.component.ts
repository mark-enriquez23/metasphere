import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  public stepFourForm: FormGroup;
  state: string;

  constructor(private fb: FormBuilder) {
    this.stepFourForm = this.fb.group({
      phoneNumber: this.fb.control(''),
      email: this.fb.control('')
    });
  }


  ngOnInit(): void {
  }

}

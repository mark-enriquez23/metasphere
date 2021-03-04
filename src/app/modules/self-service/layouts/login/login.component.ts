import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.checkInForm = this.formBuilder.group({
      reservation_number: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    });
  }

  get f() { return this.checkInForm.controls; }
  get formErrorHandler() { return this.f.reservation_number.errors || this.f.last_name.errors;  }

}

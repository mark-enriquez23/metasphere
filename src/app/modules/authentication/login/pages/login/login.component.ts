import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import { SpinnerService } from 'src/app/shared/utilities/spinner/spinner.service';
import { environment } from 'src/environments/environment';

/**
 * Login Component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /**
   * Constructor
   *
   * @param  {Router} privaterouter
   */

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private spinnerSrv: SpinnerService) {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      room_number: ['', [Validators.required]],
      last_name: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls; }
  get formErrorHandler() { return this.f.room_number.errors || this.f.last_name.errors;  }
  get formStatusError() { return this.f.room_number.value === '' || this.f.last_name.value === '' }

  /**
   * Login
   *
   * @returns void
   */
  login(): void {
    if (!this.formErrorHandler) {
      this.errorMessage = '';
      this.spinnerSrv.show('Signing you in...');
      console.log(this.f);
      this.userService.userLogin(this.f.room_number.value, this.f.last_name.value).then((res: any) => {
        console.log(res)
        this.userService.storeToken(res);
        // this.router.navigateByUrl(environment.initial_page);
      }).finally(() =>{
        this.router.navigate(['main/experience']);
        this.spinnerSrv.hide()}
      );
    }
  }

}

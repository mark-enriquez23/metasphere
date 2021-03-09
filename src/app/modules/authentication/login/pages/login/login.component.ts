import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * Login
   *
   * @returns void
   */
  login(): void {
    this.router.navigate(['main'])
  }

}

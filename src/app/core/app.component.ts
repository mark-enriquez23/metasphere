import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { UserService } from '../shared/services/user/user.service';

/**
 *
 * App Component
 *
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Title
   * @type {String}
   */
  title = 'metasphere';
  constructor(private userService: UserService) {}
  /**
   * Set's the App to scroll to the top after route change
   *
   * @param  {Event} event
   * @returns void
   */
  onActivate(event: Event): void {
    window.scroll(0,0);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.userService.userData.constructor === Object) {
      this.userService.clearTokenData();
    }
  }
}

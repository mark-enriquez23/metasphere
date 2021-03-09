import { Component } from '@angular/core';

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
export class AppComponent {
  /**
   * Title
   * @type {String}
   */
  title = 'metasphere';

  /**
   * Set's the App to scroll to the top after route change
   *
   * @param  {Event} event
   * @returns void
   */
  onActivate(event: Event): void {
    window.scroll(0,0);
  }
}

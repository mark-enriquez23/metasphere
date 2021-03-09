import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * HK Navigation Header
 */
@Component({
  selector: 'app-hk-nav-header',
  templateUrl: './hk-nav-header.component.html',
  styleUrls: ['./hk-nav-header.component.scss']
})
export class HkNavHeaderComponent implements OnInit {
  /**
   * Type Injectible
   *
   * @param  {any} type
   * @returns any
   */
  @Input() type: any;

  /**
   * Current Route
   *
   * @type {string}
   */
  currentRoute: string;
  /**
   * Services Types Array
   *
   * @type {Array}
   */
  servicesTypes = ['Complimentary Services', 'Superior Services'];
  /**
   * Amenities Types Array
   *
   * @type {Array}
   */
  amenitiesTypes =  ['Complimentary Amenities', 'Superior Amenities'];
  /**
   * Options Types Array
   *
   * @type {Array}
   */
  options = [];

  /**
   *
   * @ignore
   */
  constructor(private router:Router) {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        let tempUrl = res.url;
        tempUrl = tempUrl.split('/')
        this.currentRoute = tempUrl[tempUrl.length - 1]
        if (tempUrl[tempUrl.length - 1] === 'services') {
          this.options = this.servicesTypes;
        }
        else this.options = this.amenitiesTypes;
      }
    });
  }

  /**
   *
   * @ignore
   */
  ngOnInit(): void {
  }

}

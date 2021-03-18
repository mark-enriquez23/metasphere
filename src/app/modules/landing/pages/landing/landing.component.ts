import { Component, OnInit } from '@angular/core';
import * as images from 'src/assets/json/images.json';
import { environment } from 'src/environments/environment';


/**
 * Landing Page Component
 */
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  /**
   * Company Images
   * @type {any}
   */
  companyImgs: any;
  /**
   * App Type
   * @type {any}
   */
  appType: any;
  env = environment;

  /**
   * @ignore
   */
  constructor() {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.companyImgs = {
      facilityImg: images['facilitiesImg'],
      serviceImg: images['servicesImg'],
      faqImg: images['faqImg']
    }
    console.log(this.companyImgs)
  }

}

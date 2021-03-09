import { Component, OnInit } from '@angular/core';
import * as images from 'src/assets/json/images.json';

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

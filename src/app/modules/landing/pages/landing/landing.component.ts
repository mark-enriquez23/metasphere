import { Component, OnInit } from '@angular/core';
/**
 * @description Fetch the images on the json file
 */
import * as images from 'src/assets/json/images.json';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  /**
   * @description Company Images for Hotel Information
   */
  companyImgs: any;
  constructor() {
  }

  ngOnInit(): void {
    /**
     * @description Bind the data from the json to the properties of the Company Images
     */
    this.companyImgs = {
      facilityImg: images['facilitiesImg'],
      serviceImg: images['servicesImg'],
      faqImg: images['faqImg']
    }
    console.log(this.companyImgs)
  }

}

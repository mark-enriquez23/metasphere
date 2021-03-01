import { Component, OnInit } from '@angular/core';
import * as images from 'src/assets/json/images.json';

@Component({
  selector: 'app-pre-check',
  templateUrl: './pre-check.component.html',
  styleUrls: ['./pre-check.component.scss']
})
export class PreCheckComponent implements OnInit {

  companyImgs: any;
  constructor() { }

  ngOnInit(): void {
    this.companyImgs = {
      facilityImg: images['facilitiesImg'],
      serviceImg: images['servicesImg'],
      faqImg: images['faqImg']
    }
    console.log(this.companyImgs)
  }

  

}

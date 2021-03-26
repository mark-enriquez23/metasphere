import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';
import { ServiceOrderListingService } from 'src/app/shared/services/room-services-housekeeping/service-order-listing/service-order-listing.service';
import { defer, from } from 'rxjs'
import {shareReplay } from 'rxjs/operators'

/**
 * HK Services Page Component
 */
@Component({
  selector: 'app-hk-services',
  templateUrl: './hk-services.component.html',
  styleUrls: ['./hk-services.component.scss']
})
export class HkServicesComponent implements OnInit {

  /**
   * Items
   *
   * @type {Array[Object]}
   */
   items = []
   /**
    * Main Category Data
    *
    * @type {any}
    */
    servicesListData: any;

  arrayItems = [];
  sum = 10;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";

  /**
   * @ignore
   */
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private mainCategoryService: MainCategoryService,
    private serviceOrderListingService: ServiceOrderListingService
  ) {
    if (this.activateRoute.snapshot.data.servicesListData) {
      const serviceData = this.activateRoute.snapshot.data.servicesListData
      console.log(serviceData)
      this.mainCategoryService.mainCategoryData.next(serviceData[0])
      this.serviceOrderListingService.serviceListing.next(serviceData[1])
      this.serviceOrderListingService.serviceListing.subscribe((res: any) => {
        this.servicesListData = res.data
        this.appendItems(0, this.sum);
      })
    } else {
      console.log('err')
    }
  }
  /**
   * @ignore
   */
  ngOnInit(): void {
    this.appendItems(0, this.sum);
  }

  onScrollDown(ev) {
    if (this.sum <= this.servicesListData.length) {
      console.log("scrolled down!!", ev);

      // add another 20 items
      const start = this.sum;
      this.sum += 10;
      this.appendItems(start, this.sum);

      console.log(this.sum, this.servicesListData.length)
      this.direction = "down";
      console.log(this.arrayItems)
    }
  }

  onUp(ev) {
    console.log("scrolled up!", ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = "up";
  }


  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "push");
  }


  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < this.sum; ++i) {
      if (this.servicesListData[i]) {
        const itemData = {
          ...this.servicesListData[i],
          image: this.servicesListData.image || './assets/images/SA-HK/250.png'
        }
        this.arrayItems[_method](itemData);
      }

    }
  }

}

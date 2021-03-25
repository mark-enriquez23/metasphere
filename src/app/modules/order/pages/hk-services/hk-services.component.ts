import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

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
    private mainCategoryService: MainCategoryService
  ) {
    if (this.activateRoute.snapshot.data.servicesListData) {
      this.mainCategoryService.mainCategoryData = this.activateRoute.snapshot.data.servicesListData[0].list
      this.servicesListData = this.activateRoute.snapshot.data.servicesListData[1].data;
      // this.servicesListData = {
      //   ...tempService,
      //   list: []
      // }
      // tempService.forEach(element => {
      //   element.forEach(serviceItem => {
      //     this.servicesListData.list.push(serviceItem);
      //   });
      // });
    } else{
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

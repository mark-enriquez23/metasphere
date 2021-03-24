import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  ) {
    if (this.activateRoute.snapshot.data.servicesListData) {

      let tempService = this.activateRoute.snapshot.data.servicesListData;
      this.servicesListData = {
        ...tempService,
        list: []
      }
      tempService.forEach(element => {
        element.forEach(serviceItem => {
          this.servicesListData.list.push(serviceItem);
        });
      });
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
    if (this.sum <= this.servicesListData.list.length) {
      console.log("scrolled down!!", ev);

      // add another 20 items
      const start = this.sum;
      this.sum += 10;
      this.appendItems(start, this.sum);

      console.log(this.sum, this.servicesListData.list.length)
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
      if (this.servicesListData.list[i])
        this.arrayItems[_method](this.servicesListData.list[i]);
    }
  }

}

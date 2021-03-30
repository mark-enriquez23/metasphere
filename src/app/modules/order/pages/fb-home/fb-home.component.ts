import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderListingService } from 'src/app/shared/services/food-drinks-orders/order-listing/order-listing.service';
import { GeneralService } from 'src/app/shared/services/general/general.service';

/**
 * FB Home Page Component
 */
@Component({
  selector: 'app-fb-home',
  templateUrl: './fb-home.component.html',
  styleUrls: ['./fb-home.component.scss']
})
export class FbHomeComponent implements OnInit {

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
   orderListingData: any;


  /**
    * Items Array Data
    *
    * @type {Array}
  */
   arrayItems = [];

   /**
     * Items Sum Data
     *
     * @type {number}
   */
   sum = 10;

   /**
     * throttle Data
     *
     * @type {number}
   */
   throttle = 300;

   /**
     * Scroll Distance Data
     *
     * @type {number}
   */
   scrollDistance = 1;
   /**
     * Up Scroll Distance Data
     *
     * @type {number}
   */
   scrollUpDistance = 2;

   /**
     * Direction Data
     *
     * @type {string}
   */
   direction = "";

  /**
   * @ignore
   */
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private generalService: GeneralService,
    private orderListingService: OrderListingService
  ) {
    if (this.activateRoute.snapshot.data.orderListingData) {
      this.orderListingData = this.activateRoute.snapshot.data.orderListingData[0];
      this.orderListingService.orderServerItemisting.subscribe((res: any) => {
        this.orderListingService = res;
      })
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

 /**
   *
   * On Scroll Down Method
   *
   * @param  {} ev
   */
  onScrollDown(ev): void {
    if (this.sum <= this.orderListingData.list.length) {
      console.log("scrolled down!!", ev);

      // add another 20 items
      const start = this.sum;
      this.sum += 10;
      this.appendItems(start, this.sum);

      console.log(this.sum, this.orderListingData.list.length)
      this.direction = "down";
      console.log(this.arrayItems)
    }
  }

/**
   *
   * On Scroll Up
   *
   * @param  {} ev
   * @returns void
   */
 onUp(ev): void {
    console.log("scrolled up!", ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = "up";
  }

 /**
   *
   * Apend Items on Array Items
   *
   * @param  {} startIndex
   * @param  {} endIndex
   */
  appendItems(startIndex, endIndex): void {
    this.addItems(startIndex, endIndex, "push");
  }

 /**
   *
   * Prepend Items on Array Items
   *
   * @param  {} startIndex
   * @param  {} endIndex
   */
  prependItems(startIndex, endIndex): void {
    this.addItems(startIndex, endIndex, "unshift");
  }

  /**
   *
   * Add Items Method
   *
   * @param  {} startIndex
   * @param  {} endIndex
   * @param  {} _method
   *
   */
   addItems(startIndex, endIndex, _method): void {
    for (let i = startIndex; i < this.sum; ++i) {
      if (this.orderListingData.list[i]) {
          const itemData = {
            ...this.orderListingData.list[i],
            image: ''
          }
          this.generalService.fileExists('./assets/images/SA-HK/' + this.orderListingData.list[i].item_name +'.png').then(res => {
            itemData.image = './assets/images/SA-HK/' + this.orderListingData.list[i].item_name +'.png'
          }).catch(err => {
            itemData.image = './assets/images/SA-HK/250.png'
          }).finally(() =>
          this.arrayItems[_method](itemData))
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServerListingService } from 'src/app/shared/services/food-drinks-orders/room-server-listing/room-server-listing.service';
import { GeneralService } from 'src/app/shared/services/general/general.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

/**
 * FB Food Page Component
 */
@Component({
  selector: 'app-fb-food',
  templateUrl: './fb-food.component.html',
  styleUrls: ['./fb-food.component.scss']
})
export class FbFoodComponent implements OnInit {

  /**
   * Items
   *
   * @type {Array[Object]}
   */
   items = []

   /**
    * Room Server Listing Data
    *
    * @type {any}
    */
   roomServerListingData: any;

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
    private mainCategoryService: MainCategoryService,
    private roomServerListingService: RoomServerListingService
  ) {
    if (this.activateRoute.snapshot.data.roomServerData) {
      const roomServerData = this.activateRoute.snapshot.data.roomServerData
      this.mainCategoryService.mainCategoryData.next(roomServerData[0])
      this.roomServerListingService.roomServerItemisting.next(roomServerData[1])
      this.roomServerListingService.roomServerItemisting.subscribe((res: any) => {
        console.log(res)
        this.roomServerListingData = res
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
  /**
   *
   * On Scroll Down Method
   *
   * @param  {} ev
   */
  onScrollDown(ev): void {
    if (this.sum <= this.roomServerListingData.list.length) {
      console.log("scrolled down!!", ev);

      // add another 20 items
      const start = this.sum;
      this.sum += 10;
      this.appendItems(start, this.sum);

      console.log(this.sum, this.roomServerListingData.list.length)
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
      if (this.roomServerListingData.list[i]) {
        const itemData = {
          ...this.roomServerListingData.list[i],
          image: ''
        }
        this.generalService.fileExists('./assets/images/SA-HK/' + this.roomServerListingData.list[i].item_name +'.png').then(res => {
          itemData.image = './assets/images/SA-HK/' + this.roomServerListingData.list[i].item_name +'.png'
        }).catch(err => {
          itemData.image = './assets/images/SA-HK/250.png'
        }).finally(() =>
        this.arrayItems[_method](itemData))
    }
    }
  }
}

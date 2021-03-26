import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private generalService: GeneralService,
    private mainCategoryService: MainCategoryService
  ) {
    if (this.activateRoute.snapshot.data.roomServerData) {
      this.mainCategoryService.mainCategoryData = this.activateRoute.snapshot.data.roomServerData[0].list
      this.roomServerListingData = this.activateRoute.snapshot.data.roomServerData[1]
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

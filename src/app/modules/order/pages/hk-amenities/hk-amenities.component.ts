import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general/general.service';

/**
 * HK Amenities Page Component
 */
@Component({
  selector: 'app-hk-amenities',
  templateUrl: './hk-amenities.component.html',
  styleUrls: ['./hk-amenities.component.scss']
})
export class HkAmenitiesComponent implements OnInit {
  /**
   * Items
   *
   * @type {Array[Object]}
   */
  items = []

  /**
   * Item Listing
   *
   * @type {any}
   */
  itemListing: any

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
    private generalService: GeneralService
  ) {
    if (this.activateRoute.snapshot.data.itemListData) {
      this.itemListing = this.activateRoute.snapshot.data.itemListData;
      console.log(this.itemListing)
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
    console.log("scrolled down!!", ev);
    if(this.sum <= this.itemListing.list.length) {
      // add another 20 items
      const start = this.sum;
      this.sum += 10;
      this.appendItems(start, this.sum);

      console.log(this.sum)
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
      if (this.itemListing.list[i]) {
        const itemData = {
          ...this.itemListing.list[i],
          image: ''
        }
        this.generalService.fileExists('./assets/images/SA-HK/' + this.itemListing.list[i].item_name +'.png').then(res => {
          itemData.image = './assets/images/SA-HK/' + this.itemListing.list[i].item_name +'.png'
        }).catch(err => {
          itemData.image = './assets/images/SA-HK/250.png'
        }).finally(() =>
        this.arrayItems[_method](itemData))
      }
    }
  }

}

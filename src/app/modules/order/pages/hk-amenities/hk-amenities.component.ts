import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general/general.service';
import { ItemListingService } from 'src/app/shared/services/room-services-housekeeping/item-listing/item-listing.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

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
    private itemListingService: ItemListingService
  ) {
    if (this.activateRoute.snapshot.data.itemListData) {
      const itemsData = this.activateRoute.snapshot.data.itemListData
      this.mainCategoryService.mainCategoryData.next(itemsData[0])
      this.itemListingService.itemListing.next(itemsData[1])
      this.itemListingService.itemListing.subscribe((res: any) => {
        this.itemListing = res
        this.appendItems(0, this.sum);
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

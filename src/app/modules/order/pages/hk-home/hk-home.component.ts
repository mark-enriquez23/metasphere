import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

/**
 * HK Home Component
 */
@Component({
  selector: 'app-hk-home',
  templateUrl: './hk-home.component.html',
  styleUrls: ['./hk-home.component.scss']
})
export class HkHomeComponent implements OnInit {
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
  mainCategoryData: any;


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
  ) {
    if (this.activateRoute.snapshot.data.mainCategoryData) {
      this.mainCategoryData = this.activateRoute.snapshot.data.mainCategoryData;
      console.log(this.mainCategoryData)
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
    if(this.sum <= this.mainCategoryData.list.length) {
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
      if (this.mainCategoryData.list[i])
        this.arrayItems[_method](this.mainCategoryData.list[i]);
    }
  }

}

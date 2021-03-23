import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    * Main Category Data
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
  ) {
    if (this.activateRoute.snapshot.data.roomServerData) {
      this.roomServerListingData = this.activateRoute.snapshot.data.roomServerData;
      console.log(this.roomServerListingData)
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
      if (this.roomServerListingData.list[i])
        this.arrayItems[_method](this.roomServerListingData.list[i]);
    }
  }
}

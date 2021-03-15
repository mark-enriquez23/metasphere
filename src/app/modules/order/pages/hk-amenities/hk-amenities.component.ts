import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
   * @ignore
   */
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
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
  }

}

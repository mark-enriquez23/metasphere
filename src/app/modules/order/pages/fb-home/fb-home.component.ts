import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
   * @ignore
   */
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {
    if (this.activateRoute.snapshot.data.orderListingData) {
      this.orderListingData = this.activateRoute.snapshot.data.orderListingData;
      console.log(this.orderListingData)
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

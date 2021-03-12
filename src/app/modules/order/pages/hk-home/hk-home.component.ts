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
  }

}

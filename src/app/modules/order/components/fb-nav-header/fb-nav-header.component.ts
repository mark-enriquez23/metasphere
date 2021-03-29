import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomServerListingService } from 'src/app/shared/services/food-drinks-orders/room-server-listing/room-server-listing.service';
import { ItemListingService } from 'src/app/shared/services/room-services-housekeeping/item-listing/item-listing.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';
import { ServiceOrderListingService } from 'src/app/shared/services/room-services-housekeeping/service-order-listing/service-order-listing.service';

/**
 * Fb Navigation Header
 */
@Component({
  selector: 'app-fb-nav-header',
  templateUrl: './fb-nav-header.component.html',
  styleUrls: ['./fb-nav-header.component.scss']
})
export class FbNavHeaderComponent implements OnInit {
  /**
   * Type Injectible
   *
   * @param  {any} type
   * @returns any
   */
  @Input() type: any;

  /**
   * Current Route
   *
   * @type {string}
   */
  currentRoute: string;
  /**
   * Drink Types Array
   *
   * @type {Array}
   */
  drinkTypes = ['Cocktails', 'Wine', 'Beer', 'Non-Alcoholic'];

  /**
   * Food Types Array
   *
   * @type {Array}
   */
  foodTypes =  ['Breakfast Menu', 'Lunch Menu', 'A La Carte'];

  /**
   * Options Array
   *
   * @type {Array}
   */
  options = [];

  /**
   *
   * @ignore
   */
   constructor(private router:Router,
    public mainCategoryService: MainCategoryService,
    private roomServerListing: RoomServerListingService) {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        let tempUrl = res.url;
        tempUrl = tempUrl.split('/')
        this.currentRoute = tempUrl[tempUrl.length - 1]
      }
    });
  }

  /**
   *
   * @ignore
   */
  ngOnInit(): void {
  }


  onChange(e) {
    console.log(e)
    switch (this.currentRoute) {
      case 'foods':
        const defaultData = {
          cid: 'Mend4055a7e3kczvauyg',
          cnid: 'MnTd418b8ed2kdpghrz7'
        }
        this.roomServerListing.searchItemListing(e,defaultData);
        break;

      default:
        break;
    }
  }

}

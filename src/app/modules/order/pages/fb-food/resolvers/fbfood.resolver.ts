import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { RoomServerListingService } from 'src/app/shared/services/food-drinks-orders/room-server-listing/room-server-listing.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

@Injectable({
  providedIn: 'root'
})
export class FbfoodResolver implements Resolve<any>{

  constructor(
    private roomserverListingService: RoomServerListingService,
    private mainCategoryService: MainCategoryService
  ) { }

  resolve() {
    const defaultData = {
      cid: 'Mend4055a7e3kczvauyg',
      cnid: 'MnTd418b8ed2kdpghrz7'
    }

   return Promise.all(
      [
        this.mainCategoryService.getMainCategoryList(),
        this.roomserverListingService.roomServerItemListing(defaultData)
      ]
    );
  };

}

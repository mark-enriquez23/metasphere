import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { zip } from 'rxjs';
import { ItemListingService } from 'src/app/shared/services/room-services-housekeeping/item-listing/item-listing.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

@Injectable({
  providedIn: 'root'
})
export class HkamenitiesResolver implements Resolve<any>{

  constructor(
    private itemListing: ItemListingService,
    private mainCategoryService: MainCategoryService
  ) { }

  resolve() {

   return zip(
    this.mainCategoryService.getMainCategoryList(),
    this.itemListing.getItemListing())
  };

}

import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemListingService } from 'src/app/shared/services/room-services-housekeeping/item-listing/item-listing.service';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';
import { ServiceOrderListingService } from 'src/app/shared/services/room-services-housekeeping/service-order-listing/service-order-listing.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class HkServicesResolver implements Resolve<any>{

  constructor(
    private userService: UserService,
    private serviceListingSrv: ServiceOrderListingService,
    private mainCategoryService: MainCategoryService
  ) { }


  resolve() {
    console.log(this.userService.userData)
    const userData: any = this.userService.userData;
    // Set to 101 - API Dev

   return zip(this.mainCategoryService.getMainCategoryList(), this.serviceListingSrv.serviceOrderItemListing(101))
  };

}

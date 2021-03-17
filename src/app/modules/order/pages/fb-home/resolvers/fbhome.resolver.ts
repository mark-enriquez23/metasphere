import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { OrderListingService } from 'src/app/shared/services/food-drinks-orders/order-listing/order-listing.service';

@Injectable({
  providedIn: 'root'
})
export class FbhomeResolver implements Resolve<any>{

  constructor(
    private orderListingService: OrderListingService
  ) { }

  resolve() {
    return this.orderListingService.getOrderListing().then(data => {
      return data
    }).catch(err => {return null})
  };

}

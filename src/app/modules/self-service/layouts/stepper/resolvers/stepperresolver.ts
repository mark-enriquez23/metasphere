import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { zip } from 'rxjs';
import { OrderListingService } from 'src/app/shared/services/food-drinks-orders/order-listing/order-listing.service';
import { RoomServerListingService } from 'src/app/shared/services/food-drinks-orders/room-server-listing/room-server-listing.service';
import { GeneralService } from 'src/app/shared/services/general/general.service';

@Injectable({
  providedIn: 'root'
})
export class StepperResolver implements Resolve<any>{

  constructor(
    private roomServerItemListingService: RoomServerListingService,
    private generalService: GeneralService
  ) { }

  resolve() {
    const defaultData = {
      cid: 'Mend4055a7e3kczvauyg',
      cnid: 'MnTd418b8ed2kdpghrz7'
    }
    return zip(this.roomServerItemListingService.roomServerItemListing(defaultData), this.generalService.getCountries());
  };
}

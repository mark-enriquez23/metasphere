import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { RoomServerListingService } from 'src/app/shared/services/food-drinks-orders/room-server-listing/room-server-listing.service';

@Injectable({
  providedIn: 'root'
})
export class FbfoodResolver implements Resolve<any>{

  constructor(
    private roomserverListingService: RoomServerListingService
  ) { }

  resolve() {
    const defaultData = {
      cid: 'Mend4055a7e3kczvauyg',
      cnid: 'MnTd418b8ed2kdpghrz7'
    }
    return this.roomserverListingService.roomServerItemListing(defaultData).then(data => {
      return data
    }).catch(err => {return null})
  };

}

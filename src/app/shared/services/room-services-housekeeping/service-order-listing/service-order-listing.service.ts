import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderListingService {

  public api_type = 'customize/control'
  public serviceListing = new BehaviorSubject([]);

  constructor(public http: HttpClient) { }

  serviceOrderItemListing(roomNo: any) {
    const params = new HttpParams()
    .set('chainCode', environment.chainCode)
    .set('hotelCode', environment.hotelCode)
    .set('roomnumber', roomNo)
    const serviceData = params.toString()
    return this.http.get<any>( environment.api_path + this.api_type + '/getServiceOrderListByRoom?'  + serviceData, {})
  }

  searchServiceOrderListing(e) {
    this.serviceOrderItemListing(101).subscribe( res => {
      this.serviceListing.next(res);
    })
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderListingService {


  public api_type = 'customize/control'
  public orderServerItemisting = new BehaviorSubject([]);

  constructor(public http: HttpClient) { }

  getOrderListing() {
    const params = new HttpParams()
    .set('chainCode', environment.chainCode)
    .set('hotelCode', environment.hotelCode)
    return this.http.get<any>( environment.api_path + this.api_type + '/FetchMenuList', {params});
  }

}

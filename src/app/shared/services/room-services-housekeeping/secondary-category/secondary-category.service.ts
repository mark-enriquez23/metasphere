import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SecondaryCategoryService {

  public api_type = 'customize/control'

  constructor(public http: HttpClient) { }

  getSecondaryCategoryList(data) {
    const params = new HttpParams()
    .set('chainCode', environment.chainCode)
    .set('hotelCode', environment.hotelCode)
    .set('cid', data.cid)
    return this.http.get<any>( environment.api_path + this.api_type + '/Fetch2ndCategoryList', {params}).toPromise();
  }
}

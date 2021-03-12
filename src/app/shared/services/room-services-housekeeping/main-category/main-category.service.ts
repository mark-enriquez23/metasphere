import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  constructor(public http: HttpClient) { }

  getMainCategoryList(data) {
    const params = new HttpParams()
    .set('chainCode', data.chainCode)
    .set('hotelCode', data.hotelCode)
    .set('cid', data.cid)
    return this.http.get<any>( environment.api_path + 'customize/control/FetchCategoryList', {params}).toPromise();
  }

}

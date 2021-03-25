import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  public api_type = 'customize/control'
  public mainCategoryData: any;

  constructor(public http: HttpClient) { }

  getMainCategoryList() {
    const params = new HttpParams()
    .set('chainCode', environment.chainCode)
    .set('hotelCode', environment.hotelCode)
    return this.http.get<any>( environment.api_path + this.api_type + '/FetchCategoryList', {params}).toPromise();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getMainCategoryList(data) {
    return this.http.get<any>('http://180.169.66.202:9098/customize/control/FetchCategoryList?chainCode='+ data.chainCode + '&hotelCode='+ data.hotelCode);
  }

  getSecondaryCategoryList(data) {
    return this.http.get<any>('http://180.169.66.202:9098/customize/control/FetchCategoryList?chainCode='+ data.chainCode + '&hotelCode='+ data.hotelCode);
  }

}

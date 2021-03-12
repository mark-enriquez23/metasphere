import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }




  getMenuList(data){
    return this.http.get<any>( environment.api_path + 'customize/control/FetchMenuList?chainCode='+ data.chainCode + '&hotelCode=' + data.hotelCode);
  }

  getOrderList(data){
    return this.http.get<any>( environment.api_path + 'customize/control/FetchOrderList?chainCode='+ data.chainCode + '&hotelCode=' + data.hotelCode);
  }
}

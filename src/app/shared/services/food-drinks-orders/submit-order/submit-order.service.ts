import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitOrderService {
  private env = environment;
  public api_type = 'customize/control'

  constructor(private httpClient: HttpClient) { }

  public submitOrder(orderList: []) {
    const orderData = {
      chainCode: this.env.chainCode,
      hotelCode: this.env.hotelCode,
      proList: orderList,
    }
    return this.httpClient.post(this.env.api_path + this.api_type + '/CreateDinningOrder', orderData).toPromise();
  }
}

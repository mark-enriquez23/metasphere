import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreCheckinService {

  public api_type = 'customize/control'
  public userBooking = localStorage.getItem('booking')
  public hasBooking = !!this.userBooking;

  constructor(private httpClient: HttpClient) { }

  public fetchBooking(confirmationNumber: string, confirmationNumberLastName: string) {
    const params = new HttpParams()
    .set('confirmationNumber', confirmationNumber)
    .set('ConfirmationNumberLastName', confirmationNumberLastName)
    .set('chainCode', environment.chainCode)
    .set('hotelCode', environment.hotelCode)
    .set('program', environment.program)
    .set('kioskname', environment.kioskname)
    return this.httpClient.post(environment.api_path + this.api_type + '/newFetchBooking', params).toPromise();
  }


  public isBookingSet() {
    return new Promise((resolve, reject) => {
      if (this.hasBooking) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  public clearBookingData() {
    this.hasBooking = false;
    this.userBooking = '';
    localStorage.removeItem('booking');
  }
ß
  public storeBooking(booking: string) {
    localStorage.setItem('booking', booking);
    this.userBooking = booking;
    this.hasBooking = true;
  }
}

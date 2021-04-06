import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaveDocumentsService {
  private env = environment;
  public api_type = 'customize/control'

  constructor(private httpClient: HttpClient) { }

  public saveDocuments(documentData: any, confirmationNumber: string) {
    const params = new HttpParams()
    .set('confirmationNumber', confirmationNumber)
    .set('image', documentData.documentBase64)
    .set('pkId', 'Msen46dfb8f3kmo81vx1')
    .set('imgId', '0')
    const userData = params.toString()
    return this.httpClient.post(this.env.api_path + this.api_type + '/newFetchBooking?' + userData, {});
  }

}

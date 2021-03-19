import { HttpClient } from '@angular/common/http';
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
    const userData = {
      confirmationNumber: confirmationNumber,
      image: documentData.image,
      pkId: documentData.pkId,
      imgId: documentData.imgId,
    }
    return this.httpClient.post(this.env.api_path + this.api_type + '/newFetchBooking', userData).toPromise();
  }
}

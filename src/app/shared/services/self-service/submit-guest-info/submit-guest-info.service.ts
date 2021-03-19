import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitGuestInfoService {
  private env = environment;
  public api_type = 'customize/control'

  constructor(private httpClient: HttpClient) { }

  public saveDocuments(data: any) {
    const userData = {
      confirmationNumber: data.confirmationNumber,
      Lastname: data.Lastname,
      FirstName: data.FirstName,
      CheckinDate: data.CheckinDate,
      CheckoutDate: data.CheckoutDate,
      TotalRoomNight: data.TotalRoomNight,
      roomTypeShortDescription: data.roomTypeShortDescription,
      NumberofAdult: data.NumberofAdult,
      NumberofChild: data.NumberofChild,
      RoomRate: data.RoomRate,
      PaymentMethod: data.PaymentMethod,
      GenderCode: data.GenderCode,
      DateOfBirth: data.DateOfBirth,
      DocumnetType: data.DocumnetType,
      DocumentNumber: data.DocumentNumber,
      NationalityCode: data.NationalityCode,
      BirthPlace: data.BirthPlace,
      IssueDate: data.IssueDate,
      ExpiryDate: data.ExpiryDate,
      Mobile: data.Mobile,
      Email: data.Email,
      ShareFirstName: data.ShareFirstName,
      ShareLastname: data.ShareLastname,
      ShareGenderCode: data.ShareGenderCode,
      ShareDateOfBirth: data.ShareDateOfBirth,
      ShareDocumnetType: data.ShareDocumnetType,
      ShareDocumentNumber: data.ShareDocumentNumber,
      ShareNationalityCode: data.ShareNationalityCode,
      ShareBirthPlace: data.ShareBirthPlace,
      ShareIssueDate: data.ShareIssueDate,
      ShareExpiryDate: data.ShareExpiryDate,
      ifPASSPORT: data.ifPASSPORT,
      ifPOS: data.ifPOS,
      ifFACE: data.ifFACE,
      status: data.status,
      imgId: data.imgId,
      faceimgId: data.faceimgId,
      ShareimgId: data.ShareimgId,
    }
    return this.httpClient.post(this.env.api_path + this.api_type + '/insertGuestInfo', userData).toPromise();
  }
}

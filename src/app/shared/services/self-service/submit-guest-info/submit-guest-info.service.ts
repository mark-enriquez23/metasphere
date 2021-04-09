import { HttpClient, HttpParams } from '@angular/common/http';
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
    const params = new HttpParams()
    .set('confirmationNumber', data.confirmationNumber)
    .set('Lastname', data.Lastname)
    .set('FirstName', data.FirstName)
    .set('CheckinDate', data.CheckinDate)
    .set('TotalRoomNight', data.TotalRoomNight)
    .set('roomTypeShortDescription', data.roomTypeShortDescription)
    .set('NumberofAdult', data.NumberofAdult)
    .set('NumberofChild', data.NumberofChild)
    .set('RoomRate', data.RoomRate)
    .set('PaymentMethod', data.PaymentMethod)
    .set('GenderCode', data.GenderCode)
    .set('DateOfBirth', data.DateOfBirth)
    .set('DocumnetType', data.DocumnetType)
    .set('DocumentNumber', data.DocumentNumber)
    .set('NationalityCode', data.NationalityCode)
    .set('BirthPlace', data.BirthPlace)
    .set('IssueDate', data.IssueDate)
    .set('ExpiryDate', data.ExpiryDate)
    .set('Mobile', data.Mobile)
    .set('Email', data.Email)
    .set('ShareFirstName', data.ShareFirstName)
    .set('ShareLastname', data.ShareLastname)
    .set('ShareGenderCode', data.ShareGenderCode)
    .set('ShareDateOfBirth', data.ShareDateOfBirth)
    .set('ShareDocumnetType', data.ShareDocumnetType)
    .set('ShareDocumentNumber', data.ShareDocumentNumber)
    .set('ShareNationalityCode', data.ShareNationalityCode)
    .set('ShareBirthPlace', data.ShareBirthPlace)
    .set('ShareIssueDate', data.ShareIssueDate)
    .set('ShareExpiryDate', data.ShareExpiryDate)
    .set('ifPASSPORT', data.ifPASSPORT)
    .set('ifPOS', data.ifPOS)
    .set('ifFACE', data.ifFACE)
    .set('imgId', data.imgId)
    .set('faceimgId', data.faceimgId)
    .set('ShareimgId', data.ShareimgId)
    const userData = params.toString()
    return this.httpClient.post(this.env.api_path + this.api_type + '/insertGuestInfo?' + userData, {});
  }
}

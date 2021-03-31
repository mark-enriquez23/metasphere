import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userData = localStorage.getItem('user')
  public hasToken = !!this.userData;
  public api_type = 'customize/control'

  constructor(private httpClient: HttpClient) { }

  public userLogin(roomNumber: string, lastName: string) {
    const params = new HttpParams()
    .set('roomNo', roomNumber)
    .set('lastName', lastName)
    const userData = params.toString()
    return this.httpClient.post(environment.api_path + this.api_type + '/FetchBooKingwithlastNameAndRoomno?' + userData , {}).toPromise();
  }

  public isUserLoggedIn() {
    return new Promise((resolve, reject) => {
      if (this.hasToken && this.userData.constructor === Object) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  public clearTokenData() {
    this.hasToken = false;
    this.userData = null;
    localStorage.removeItem('user');
  }
ß
  public storeToken(user) {
    localStorage.setItem('user', user);
    this.userData = user;
    this.hasToken = true;
  }
}

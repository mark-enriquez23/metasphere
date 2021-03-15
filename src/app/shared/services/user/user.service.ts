import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userToken = localStorage.getItem('token')
  public hasToken = !!this.userToken;

  constructor(private httpClient: HttpClient) { }

  public userLogin(roomNumber: string, lastName: string) {
    console.log('test')
    return this.httpClient.post(environment.api_path + 'user/login', {roomNumber: roomNumber, lastName:lastName }).toPromise();
  }

  public isUserLoggedIn() {
    return new Promise((resolve, reject) => {
      if (this.hasToken) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }


  public clearTokenData() {
    this.hasToken = false;
    this.userToken = '';
    localStorage.removeItem('token');
  }
ß
  public storeToken(token: string) {
    localStorage.setItem('token', token);
    this.userToken = token;
    this.hasToken = true;
  }
}

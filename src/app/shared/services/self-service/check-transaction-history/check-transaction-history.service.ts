import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckTransactionHistoryService {
  private env = environment;
  public api_type = 'customize/control'

  constructor(private httpClient: HttpClient) { }

  public checkTransactionHistory(realm: string) {
    const userData = {
      realm: realm,
    }
    return this.httpClient.post('https://portal.sandbox.ngenius-payments.com/', userData).toPromise();
  }
}

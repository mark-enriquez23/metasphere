import { HttpClient } from '@angular/common/http';
import { Injectable, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private httpClient: HttpClient,
    private sanitizer: DomSanitizer) { }


  public fileExists(url: string)  {
      return this.httpClient.get(url,
        {responseType: 'blob'}).toPromise();

  }
}

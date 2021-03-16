import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PreCheckinService } from 'src/app/shared/services/self-service/pre-checkin/pre-checkin.service';

@Injectable({
  providedIn: 'root'
})
export class SelfServiceGuardService {


  constructor(private _router: Router, private preCheckIn: PreCheckinService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise((resolve, reject) => {
      this.preCheckIn.isBookingSet().then((result: any) => {
          resolve(true)
      })
      .catch(error => {
        this.preCheckIn.clearBookingData();
        reject(this._router.navigate(["/self-service/login"]));
      })
  })
  }
}

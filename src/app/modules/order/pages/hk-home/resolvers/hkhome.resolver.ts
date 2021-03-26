import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

@Injectable({
  providedIn: 'root'
})
export class HkhomeResolver implements Resolve<any>{

  constructor(
    private mainCategoryService: MainCategoryService
  ) { }

  resolve() {
    // return this.mainCategoryService.getMainCategoryList().then(data => {
    //   return data
    // }).catch(err => {return null})
  };

}

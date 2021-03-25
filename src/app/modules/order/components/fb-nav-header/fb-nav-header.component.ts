import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainCategoryService } from 'src/app/shared/services/room-services-housekeeping/main-category/main-category.service';

/**
 * Fb Navigation Header
 */
@Component({
  selector: 'app-fb-nav-header',
  templateUrl: './fb-nav-header.component.html',
  styleUrls: ['./fb-nav-header.component.scss']
})
export class FbNavHeaderComponent implements OnInit {
  /**
   * Type Injectible
   *
   * @param  {any} type
   * @returns any
   */
  @Input() type: any;

  /**
   * Current Route
   *
   * @type {string}
   */
  currentRoute: string;
  /**
   * Drink Types Array
   *
   * @type {Array}
   */
  drinkTypes = ['Cocktails', 'Wine', 'Beer', 'Non-Alcoholic'];

  /**
   * Food Types Array
   *
   * @type {Array}
   */
  foodTypes =  ['Breakfast Menu', 'Lunch Menu', 'A La Carte'];

  /**
   * Options Array
   *
   * @type {Array}
   */
  options = [];

  /**
   * @ignore
   */
  constructor(private router:Router, public mainCategoryService: MainCategoryService) {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        let tempUrl = res.url;
        tempUrl = tempUrl.split('/')
        this.currentRoute = tempUrl[tempUrl.length - 1]
        if (tempUrl[tempUrl.length - 1] === 'foods') {
          this.options = this.foodTypes;
        }
        else this.options = this.drinkTypes;
      }
    });
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fb-nav-header',
  templateUrl: './fb-nav-header.component.html',
  styleUrls: ['./fb-nav-header.component.scss']
})
export class FbNavHeaderComponent implements OnInit {
  @Input() type: any;
  currentRoute: string;
  drinkTypes = ['Cocktails', 'Wine', 'Beer', 'Non-Alcoholic'];
  foodTypes =  ['Breakfast Menu', 'Lunch Menu', 'A La Carte'];
  options = [];

  constructor(private router:Router) {
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
  ngOnInit(): void {
  }

}

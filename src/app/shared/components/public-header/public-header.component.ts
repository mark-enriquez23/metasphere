import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
      if (window.pageYOffset > 1) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
  }
  //Variables
  scrolled = false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hk-nav-header',
  templateUrl: './hk-nav-header.component.html',
  styleUrls: ['./hk-nav-header.component.scss']
})
export class HkNavHeaderComponent implements OnInit {
  @Input() type: any;
  currentRoute: string;
  servicesTypes = ['Complimentary Services', 'Superior Services'];
  amenitiesTypes =  ['Complimentary Amenities', 'Superior Amenities'];
  options = [];

  constructor(private router:Router) {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        let tempUrl = res.url;
        tempUrl = tempUrl.split('/')
        this.currentRoute = tempUrl[tempUrl.length - 1]
        if (tempUrl[tempUrl.length - 1] === 'services') {
          this.options = this.servicesTypes;
        }
        else this.options = this.amenitiesTypes;
      }
    });
  }
  ngOnInit(): void {
  }

}

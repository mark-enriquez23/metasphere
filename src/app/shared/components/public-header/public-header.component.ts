import { Input } from '@angular/core';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit {
  @Input() state: string;
  @Input() type: null;
  menus = [
    {
      name: 'Start',
      route: 'landing'
    }
  ];
  navigationExtras = {
    queryParams: {}
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
      if (window.pageYOffset > 1) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
  }
  //Variables
  scrolled = false;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.state)
    this.setMenuItems();
  }

  setMenuItems(): void {
    if (this.state) {
      let menuItems = [];
      switch (this.state) {
        case 'pre-checkin':
          menuItems.push({
            name: 'self-service',
            route: 'self-service/login'
          })
          break;

        case 'my-experience':
          menuItems.push({
            name: 'My-Experience',
            route: 'main'
          },
          {
            name: 'Order',
            route: 'main/experience',
            params: 'menu'
          })
          break;

        default:
          break;
      }
      menuItems.forEach(element => {
        this.menus.push(element)
      });
    }
  }

  setMenuRoute(item): string {
    let initialRoute = '/' + item.route
    return item.params ? initialRoute = initialRoute + '/' + item.params : initialRoute
  }

  logout(): void {
    this.userService.clearTokenData();
    location.reload();
  }
}

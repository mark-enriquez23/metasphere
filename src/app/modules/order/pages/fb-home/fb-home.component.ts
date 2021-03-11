import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

/**
 * FB Home Page Component
 */
@Component({
  selector: 'app-fb-home',
  templateUrl: './fb-home.component.html',
  styleUrls: ['./fb-home.component.scss']
})
export class FbHomeComponent implements OnInit {
  /**
   * Items
   *
   * @type {Array[Object]}
   */
  items = [
    {
      name: 'Cheeze Cheezeburger',
      description: 'With original dressing, smoked baco, salad, and crispy fries',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 15,
      quantity: 0
    },
    {
      name: 'Veggo Burger',
      description: 'Haloumi cheese, spicy sauce, and red onions',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 12,
      quantity: 0
    },
    {
      name: 'Cheeze Cheezeburger',
      description: 'With original dressing, smoked baco, salad, and crispy fries',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 15,
      quantity: 0
    },
    {
      name: 'Veggo Burger',
      description: 'Haloumi cheese, spicy sauce, and red onions',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 12,
      quantity: 0
    },
    {
      name: 'Cheeze Cheezeburger',
      description: 'With original dressing, smoked baco, salad, and crispy fries',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 15,
      quantity: 0
    },
    {
      name: 'Veggo Burger',
      description: 'Haloumi cheese, spicy sauce, and red onions',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 12,
      quantity: 0
    },
    {
      name: 'Cheeze Cheezeburger',
      description: 'With original dressing, smoked baco, salad, and crispy fries',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 15,
      quantity: 0
    },
    {
      name: 'Veggo Burger',
      description: 'Haloumi cheese, spicy sauce, and red onions',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 12,
      quantity: 0
    },
    {
      name: 'Cheeze Cheezeburger',
      description: 'With original dressing, smoked baco, salad, and crispy fries',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 15,
      quantity: 0
    },
    {
      name: 'Veggo Burger',
      description: 'Haloumi cheese, spicy sauce, and red onions',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 12,
      quantity: 0
    },
    {
      name: 'Cheeze Cheezeburger',
      description: 'With original dressing, smoked baco, salad, and crispy fries',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 15,
      quantity: 0
    },
    {
      name: 'Veggo Burger',
      description: 'Haloumi cheese, spicy sauce, and red onions',
      image: './assets/images/order_-_f_b_-_home/u125.png',
      price: 12,
      quantity: 0
    },
  ]
  /**
   * @ignore
   */
  constructor(private apiService: ApiService) {
    const data = {
      chainCode: 'Cha',
      hotelCode: 'SINSC'

    }
    this.apiService.getMainCategoryList(data).subscribe((res) => {
      console.log(res)
    })
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

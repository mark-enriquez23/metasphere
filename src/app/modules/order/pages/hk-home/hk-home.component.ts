import { Component, OnInit } from '@angular/core';

/**
 * HK Home Component
 */
@Component({
  selector: 'app-hk-home',
  templateUrl: './hk-home.component.html',
  styleUrls: ['./hk-home.component.scss']
})
export class HkHomeComponent implements OnInit {
  /**
   * Items
   *
   * @type {Array[Object]}
   */
  items = [
    {
      name: 'Organic Shampoo',
      description: 'Maui Organic Moisture Shampoo',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Bathroom Robe',
      description: 'Fluffy Bathroom Robe, Extra Soft',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Organic Shampoo',
      description: 'Maui Organic Moisture Shampoo',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Bathroom Robe',
      description: 'Fluffy Bathroom Robe, Extra Soft',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Organic Shampoo',
      description: 'Maui Organic Moisture Shampoo',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Bathroom Robe',
      description: 'Fluffy Bathroom Robe, Extra Soft',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Organic Shampoo',
      description: 'Maui Organic Moisture Shampoo',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Bathroom Robe',
      description: 'Fluffy Bathroom Robe, Extra Soft',
      image: 'assets/images/order_-_hk_-_home/u324.png',
      price: 8,
      quantity: 0
    }
  ]
  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

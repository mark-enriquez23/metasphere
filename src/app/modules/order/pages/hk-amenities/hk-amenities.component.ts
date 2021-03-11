import { Component, OnInit } from '@angular/core';

/**
 * HK Amenities Page Component
 */
@Component({
  selector: 'app-hk-amenities',
  templateUrl: './hk-amenities.component.html',
  styleUrls: ['./hk-amenities.component.scss']
})
export class HkAmenitiesComponent implements OnInit {
  /**
   * Items
   *
   * @type {Array[Object]}
   */
  items = [
    {
      name: 'Fresh Set of Towels',
      description: 'Need a new set of towels?',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Set Toiletries',
      description: 'Includes conditioner, shampoo, and Bathroom Gel',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Fresh Set of Towels',
      description: 'Need a new set of towels?',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Set Toiletries',
      description: 'Includes conditioner, shampoo, and Bathroom Gel',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Fresh Set of Towels',
      description: 'Need a new set of towels?',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Set Toiletries',
      description: 'Includes conditioner, shampoo, and Bathroom Gel',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Fresh Set of Towels',
      description: 'Need a new set of towels?',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Set Toiletries',
      description: 'Includes conditioner, shampoo, and Bathroom Gel',
      image: './assets/images/order_-_hk_-_items/u386.png',
      price: 8,
      quantity: 0
    },
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

import { Component, OnInit } from '@angular/core';

/**
 * HK Services Page Component
 */
@Component({
  selector: 'app-hk-services',
  templateUrl: './hk-services.component.html',
  styleUrls: ['./hk-services.component.scss']
})
export class HkServicesComponent implements OnInit {
  /**
   * Items
   *
   * @type {Array[Objects]}
   */
  items = [
    {
      name: 'Make Up Room',
      description: 'Housekeeping Service on demand.',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Bed',
      description: 'Let us arrange an extra bed at your request',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 8,
      quantity: 0
    },

    {
      name: 'Make Up Room',
      description: 'Housekeeping Service on demand.',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Bed',
      description: 'Let us arrange an extra bed at your request',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Make Up Room',
      description: 'Housekeeping Service on demand.',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Bed',
      description: 'Let us arrange an extra bed at your request',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Make Up Room',
      description: 'Housekeeping Service on demand.',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Bed',
      description: 'Let us arrange an extra bed at your request',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 8,
      quantity: 0
    },
    {
      name: 'Make Up Room',
      description: 'Housekeeping Service on demand.',
      image: 'assets/images/order_-_hk_-_services/u355.png',
      price: 10,
      quantity: 0
    },
    {
      name: 'Extra Bed',
      description: 'Let us arrange an extra bed at your request',
      image: 'assets/images/order_-_hk_-_services/u355.png',
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

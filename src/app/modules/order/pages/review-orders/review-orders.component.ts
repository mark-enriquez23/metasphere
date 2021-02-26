import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-orders',
  templateUrl: './review-orders.component.html',
  styleUrls: ['./review-orders.component.scss']
})
export class ReviewOrdersComponent implements OnInit {
  /**
   *
   * @description: Orders Data Template
   *
   */
  orders = [
    {
      so_number: 'DS2021202080001',
      status: 'Pending',
      created_time: this.getDate(),
      items: 2,
      total_amount: 384.77
    },
    {
      so_number: 'DS2021202080002',
      status: 'Pending',
      created_time: this.getDate(),
      items: 2,
      total_amount: 150
    },
    {
      so_number: 'DS2021202080003',
      status: 'Pending',
      created_time: this.getDate(),
      items: 1,
      total_amount: 285
    },
    {
      so_number: 'DS2021202080004',
      status: 'Pending',
      created_time: this.getDate(),
      items: 8,
      total_amount: 165
    },
    {
      so_number: 'DS2021202080005',
      status: 'Pending',
      created_time: this.getDate(),
      items: 5,
      total_amount: 458
    },
    {
      so_number: 'DS2021202080006',
      status: 'Pending',
      created_time: this.getDate(),
      items: 2,
      total_amount: 178
    },
    {
      so_number: 'DS2021202080007',
      status: 'Pending',
      created_time: this.getDate(),
      items: 6,
      total_amount: 585.26
    },
    {
      so_number: 'DS2021202080008',
      status: 'Pending',
      created_time: this.getDate(),
      items: 6,
      total_amount: 585.26
    },
    {
      so_number: 'DS2021202080009',
      status: 'Pending',
      created_time: this.getDate(),
      items: 6,
      total_amount: 585.26
    },
    {
      so_number: 'DS20212020800010',
      status: 'Pending',
      created_time: this.getDate(),
      items: 6,
      total_amount: 585.26
    },
    {
      so_number: 'DS20212020800011',
      status: 'Pending',
      created_time: this.getDate(),
      items: 6,
      total_amount: 585.26
    }
  ]
  constructor() { }
  /**
   * @description: Lifecycle hook - on initialize
   */
  ngOnInit(): void {
  }

  /**
   * @description: Method for date retrieval
   *
   * @returns: Current Date with predefined format
   */
  getDate() {
    var date = new Date("Sun May 11,2014");
    var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                        .toISOString()
                        .split("T")[0];
    return dateString;
  }


}

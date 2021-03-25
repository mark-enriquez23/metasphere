import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-cards',
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.scss']
})
export class ServicesCardsComponent implements OnInit {
  /**
   * Input Data Injectible
   *
   * @param  {any} data
   * @returns any
   */
  @Input() data: any;

  /**
   * Item Data
   *
   * @type {any}
   */
  itemData: any;

  /**
   * @ignore
   */
  constructor() {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.itemData = {
      ...this.data,
      quantity: 0,
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-item-cards',
  templateUrl: './fb-item-cards.component.html',
  styleUrls: ['./fb-item-cards.component.scss']
})
export class FbItemCardsComponent implements OnInit {
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

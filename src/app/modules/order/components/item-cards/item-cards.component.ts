import { Component, Input, OnInit } from '@angular/core';

/**
 * Order Product Cards
 */
@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.scss']
})
export class ItemCardsComponent implements OnInit {
  /**
   * Input Data Injectible
   *
   * @param  {any} data
   * @returns any
   */
  @Input() data: any;

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

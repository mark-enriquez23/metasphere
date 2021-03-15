import { Component, Input, OnInit } from '@angular/core';
import { SecondaryCategoryService } from 'src/app/shared/services/room-services-housekeeping/secondary-category/secondary-category.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.scss']
})
export class CategoryCardsComponent implements OnInit {
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
  constructor(public secondaryCategoryService: SecondaryCategoryService) {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.itemData = {
      ...this.data,
      quantity: 0,
      items: [],
    }

    const initialContent = {
      chainCode: 'CHA',
      hotelCode: 'SINSC',
      cid: this.data.cid
    }
    this.secondaryCategoryService.getSecondaryCategoryList(initialContent).then((res: any) => {
      res.list.forEach(element => {
        this.itemData.items.push(element.typename)
      });
    })

  }

}

import { Component, OnInit } from '@angular/core';
import * as images from 'src/assets/json/images.json';
import { DialogService } from '@ngneat/dialog';
import { MenuDialogComponent } from '../../components/menu-dialog/menu-dialog.component';
import { ActivatedRoute } from '@angular/router';

/**
 * Main Experience Page Component
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  /**
   * Company Images
   * @type {any}
   */
  companyImgs: any;

  /**
   * Component Constructor
   *
   * @param  {DialogService} privatedialog
   * @param  {ActivatedRoute} privateactivatedRoute
   */
  constructor(private dialog: DialogService, private activatedRoute: ActivatedRoute) {
    const optionalParam = this.activatedRoute.snapshot.paramMap.get('menu')
    console.log(optionalParam)
    if (optionalParam)
      this.openMenu();
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.companyImgs = {
      facilityImg: images['facilitiesImg'],
      serviceImg: images['servicesImg'],
      faqImg: images['faqImg']
    }
    console.log(this.companyImgs)
  }

  /**
   * Opens Menu Dialog Component
   *
   * @returns void
   */
  openMenu(): void {
    this.dialog.open(MenuDialogComponent)
  }
}

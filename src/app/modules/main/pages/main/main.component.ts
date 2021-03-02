import { Component, OnInit } from '@angular/core';
import * as images from 'src/assets/json/images.json';
import { DialogService } from '@ngneat/dialog';
import { MenuDialogComponent } from '../../components/menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  companyImgs: any;
  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
    this.companyImgs = {
      facilityImg: images['facilitiesImg'],
      serviceImg: images['servicesImg'],
      faqImg: images['faqImg']
    }
    console.log(this.companyImgs)
  }

  openMenu(): void {
    this.dialog.open(MenuDialogComponent)
  }
}

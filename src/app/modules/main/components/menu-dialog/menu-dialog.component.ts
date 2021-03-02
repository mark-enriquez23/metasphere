import { Component, OnInit } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  constructor(public ref: DialogRef) { }

  ngOnInit(): void {
  }

}

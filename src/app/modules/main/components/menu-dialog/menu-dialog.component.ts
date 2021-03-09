import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

/**
 * Menu Dialog component
 */
@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit {

  /**
   * @ignore
   */
  constructor(public ref: DialogRef) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}

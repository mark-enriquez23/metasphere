import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public ref: DialogRef) {
  }

  ngOnInit(): void {}

}

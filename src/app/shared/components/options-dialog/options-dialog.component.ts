import { Inject } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-options-dialog',
  templateUrl: './options-dialog.component.html',
  styleUrls: ['./options-dialog.component.scss']
})
export class OptionsDialogComponent implements OnInit {
  content = {
    message: ''
  }

  constructor(public ref: DialogRef) {
    this.content.message = this.ref.data.message || 'We have some information for you.';
  }

  ngOnInit(): void {}

  confirm(): void {
    this.ref.close({confirmed: true})
  }
}

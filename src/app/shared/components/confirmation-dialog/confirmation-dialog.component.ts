import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit {
  content = {
    message: '',
    type: '',
    timeout: false
  }
  buttonMessage: string = '';

  constructor(public ref: DialogRef) {
    this.content.message = this.ref.data.message || 'We have some information for you.';
    this.content.type = this.ref.data.type || 'information'
    this.buttonMessage = this.setBtnMessage();
    if (this.ref.data.timeout) {
      setTimeout(() => {
        this.ref.close()
      }, 5000)
    }
  }

  ngOnInit(): void {}

  setIcon(): string {
    switch (this.content.type) {
      case 'success':
        return 'fa-check-circle'
        break;

      case 'danger':
        return 'fa-exclamation-circle'
        break;

      case 'fail':
        return 'fa-times-circle'
        break;

      default:
        return 'fa-info-circle'
        break;
    }
  }

  setBtn(): string {
    switch (this.content.type) {
      case 'success':
        return 'btn-success'
        break;

      case 'danger':
        return 'btn-warning'
        break;

      case 'fail':
        return 'btn-danger'
        break;

      default:
        return 'btn-primary'
        break;
    }
  }

  setBtnMessage(): string {
    switch (this.content.type) {
      case 'danger':
      case 'success':
        return 'Exit'
        break;

      case 'fail':
      default:
        return 'Confirm'
        break;
    }
  }
}

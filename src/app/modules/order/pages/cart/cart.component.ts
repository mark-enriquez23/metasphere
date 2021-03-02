import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems = [
    {
      id: 501,
      name: 'Make Up Room',
      price: 10.99,
      quantity: 0
    },
    {
      id: 502,
      name: 'Organic Shampoo',
      price: 10.99,
      quantity: 0
    },
    {
      id: 301,
      name: 'Heineken Beer',
      price: 20.99,
      quantity: 0
    },
    {
      id: 504,
      name: 'Margarita Pizza',
      price: 20.99,
      quantity: 0
    }
  ]
  isValidated: boolean = false;
  dialogRef: any;

  constructor(private dialog: DialogService, private router: Router) { }

  ngOnInit(): void {
  }

  removeItem(id): void {
    this.cartItems = this.cartItems.filter(x => id !== x.id)
  }

  openSuccessDialog(): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Great! Your order has been sent.',
        type: 'success'
      }
    })
  }

  openInformationDialog(): void {
   this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Please be informed that the estimated time for oders is approximately 40 minutes.',
        type: 'information'
      }
    })
  }

  async confirmOrder() {
    if (this.isValidated) {
      await this.openSuccessDialog();
      this.dialogRef.afterClosed$.subscribe(res => {
        this.isValidated = false;
        this.router.navigate(['/main']);
      });
    } else {
      await this.openInformationDialog()
      this.dialogRef.afterClosed$.subscribe(res => {
        this.isValidated = true;
      });
    }

  }
}

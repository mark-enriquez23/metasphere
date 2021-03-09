import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

/**
 * Cart Page Component
 */
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  /**
   * Cart Items Array
   *
   * @type {Array[Object]}
   */
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
  /**
   * Is validated
   *
   * @type {boolean}
   */
  isValidated: boolean = false;
  /**
   * Dialog Reference
   *
   * @type {any}
   */
  dialogRef: any;
  /**
   * Current Route
   *
   * @type {string}
   */
  currentRoute: string;


  /**
   * @ignore
   */
  constructor(private dialog: DialogService, private router: Router) {
    this.router.events.subscribe((res: any) => {
      if (res.url) {
        let tempUrl = res.url;
        tempUrl = tempUrl.split('/')
        this.currentRoute = tempUrl[tempUrl.length - 2]
      }
    });
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
  /**
   * Removes the item from the Cart
   *
   * @param  {number} id
   * @returns void
   */
  removeItem(id: number): void {
    this.cartItems = this.cartItems.filter(x => id !== x.id)
  }

  /**
   * Opens the Success Dialog
   *
   * @returns void
   */
  openSuccessDialog(): void {
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Great! Your order has been sent.',
        type: 'success'
      }
    })
  }
  /**
   * Opens the information Dialog
   *
   * @returns void
   */
  openInformationDialog(): void {
   this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Please be informed that the estimated time for oders is approximately 40 minutes.',
        type: 'information',
        timeout: true
      }
    })
  }

  /**
   * Confirms the Order from the user
   *
   * @returns Promise
   */
  async confirmOrder(): Promise<void> {
    if (this.isValidated) {
      await this.openSuccessDialog();
      this.dialogRef.afterClosed$.subscribe(res => {
        this.isValidated = false;
        this.router.navigate(['order/review-orders']);
      });
    } else {
      await this.openInformationDialog()
      this.dialogRef.afterClosed$.subscribe(res => {
        this.isValidated = true;
      });
    }
  }
}

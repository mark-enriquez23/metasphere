import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { DialogService } from '@ngneat/dialog';
import { OptionsDialogComponent } from 'src/app/shared/components/options-dialog/options-dialog.component';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  public stepTwoForm: FormGroup;
  public currentDate: any;
  public orderItems = [
    {
      id: 121231,
      name: 'Welcome Drink',
      description: '2 Champagne, Fruit Basket.',
      price: 30,
      type: 'per room',
      image: 'assets/images/self-service_-_page_2/u719.png'
    },
    {
      id: 2551,
      name: 'Superior Room',
      description: '48 Sqm. Kingsized Bed, Balcony.',
      price: 15,
      type: 'per night',
      image: 'assets/images/self-service_-_page_2/u720.png'
    },
    {
      id: 441,
      name: 'Welcome Drink',
      description: '2 Champagne, Fruit Basket.',
      price: 30,
      type: 'per room',
      image: 'assets/images/self-service_-_page_2/u719.png'
    },
    {
      id: 2341,
      name: 'Superior Room',
      description: '48 Sqm. Kingsized Bed, Balcony.',
      price: 15,
      type: 'per night',
      image: 'assets/images/self-service_-_page_2/u720.png'
    },
    {
      id: 131,
      name: 'Welcome Drink',
      description: '2 Champagne, Fruit Basket.',
      price: 30,
      type: 'per room',
      image: 'assets/images/self-service_-_page_2/u719.png'
    },
    {
      id: 331,
      name: 'Superior Room',
      description: '48 Sqm. Kingsized Bed, Balcony.',
      price: 15,
      type: 'per night',
      image: 'assets/images/self-service_-_page_2/u720.png'
    },
    {
      id: 2331,
      name: 'Welcome Drink',
      description: '2 Champagne, Fruit Basket.',
      price: 30,
      type: 'per room',
      image: 'assets/images/self-service_-_page_2/u719.png'
    },
    {
      id: 231,
      name: 'Superior Room',
      description: '48 Sqm. Kingsized Bed, Balcony.',
      price: 15,
      type: 'per night',
      image: 'assets/images/self-service_-_page_2/u720.png'
    }
  ]
  public dialogRef: any;

  constructor(private fb: FormBuilder, private dialog: DialogService) {
    this.stepTwoForm = this.fb.group({
      orders: this.fb.array([])
    })
    this.orderItems.forEach((element, index) => {
      const orderItem = this.fb.group({
        id: [element.id, [Validators.required]],
        quantity: [0, [Validators.required]],
      })
      this.addItem(orderItem)
    })

    console.log(this.f)
    this.currentDate = new Date().toISOString().split('T')[0];
  }

  get f() {
    const control = this.stepTwoForm.get('orders') as FormArray
    return control
  }
  get formErrorHandler() { return this.stepTwoForm.status === 'INVALID' }


  addItem(form): void {
    const control = this.stepTwoForm.get('orders') as FormArray
    control.push(form)
  }

  ngOnInit(): void {
  }

  async setItem(t) {
    if (t.value.quantity === 0)
      await this.openAddDialog()
    else
      await this.openRemoveDialog()

    this.dialogRef.afterClosed$.subscribe(res => {
      if (res) {
        if (res.confirmed) {
          if (t.value.quantity === 0)
            t.controls['quantity'].setValue(1)
          else
            t.controls['quantity'].setValue(0)
        }
      }
    });
  }

  openAddDialog(): void {
    this.dialogRef = this.dialog.open(OptionsDialogComponent, {
       data: {
         message: 'Would you like to add the package to your reservation?',
       }
     })
   }

   openRemoveDialog(): void {
    this.dialogRef = this.dialog.open(OptionsDialogComponent, {
       data: {
         message: 'Are you sure you want to remove the package from your reservation?',
       }
     })
   }
}

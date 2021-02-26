import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { OrderComponent } from './layouts/order/order.component';
import { ReviewOrdersComponent } from './pages/review-orders/review-orders.component';


@NgModule({
  declarations: [OrderComponent, ReviewOrdersComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }

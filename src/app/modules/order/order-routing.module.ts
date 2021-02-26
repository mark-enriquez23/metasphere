import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './layouts/order/order.component'
import { ReviewOrdersComponent } from './pages/review-orders/review-orders.component';

const routes: Routes = [
  {
    path: 'review-orders',
    component: OrderComponent,
    children: [
        {
         path: '',
         component: ReviewOrdersComponent
        },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

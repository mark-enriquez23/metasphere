import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './layouts/order/order.component'
import { ReviewOrdersComponent } from './pages/review-orders/review-orders.component';
import { HkComponent } from './layouts/hk/hk.component';
import { HkHomeComponent } from './pages/hk-home/hk-home.component';
import { HkServicesComponent } from './pages/hk-services/hk-services.component';

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
  {
    path: 'hk',
    component: HkComponent,
    children: [
        {
         path: '',
         redirectTo: 'home',
         pathMatch: 'full'
        },
        {
          path: 'home',
          component: HkHomeComponent
        },
        {
          path: 'services',
          component: HkServicesComponent
        },
        {
          path: 'amenities',
          component: HkHomeComponent
        },
        {
          path: 'cart',
          component: HkHomeComponent
        }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { OrderComponent } from './layouts/order/order.component';
import { ReviewOrdersComponent } from './pages/review-orders/review-orders.component';
import { HkComponent } from './layouts/hk/hk.component';
import { HkHomeComponent } from './pages/hk-home/hk-home.component';
import { ItemCardsComponent } from './components/item-cards/item-cards.component';
import { HkNavHeaderComponent } from './components/hk-nav-header/hk-nav-header.component';
import { HkServicesComponent } from './pages/hk-services/hk-services.component';


@NgModule({
  declarations: [OrderComponent, ReviewOrdersComponent, HkComponent, HkHomeComponent, ItemCardsComponent, HkNavHeaderComponent, HkServicesComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }

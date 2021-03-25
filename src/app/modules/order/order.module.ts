import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { OrderComponent } from './layouts/order/order.component';
import { ReviewOrdersComponent } from './pages/review-orders/review-orders.component';
import { HkComponent } from './layouts/hk/hk.component';
import { HkHomeComponent } from './pages/hk-home/hk-home.component';
import { ItemCardsComponent } from './components/item-cards/item-cards.component';
import { HkNavHeaderComponent } from './components/hk-nav-header/hk-nav-header.component';
import { HkServicesComponent } from './pages/hk-services/hk-services.component';
import { HkAmenitiesComponent } from './pages/hk-amenities/hk-amenities.component';
import { CartComponent } from './pages/cart/cart.component';
import { FbHomeComponent } from './pages/fb-home/fb-home.component';
import { FbFoodComponent } from './pages/fb-food/fb-food.component';
import { FbDrinksComponent } from './pages/fb-drinks/fb-drinks.component';
import { FbComponent } from './layouts/fb/fb.component';
import { FbNavHeaderComponent } from './components/fb-nav-header/fb-nav-header.component';
import { CategoryCardsComponent } from './components/category-cards/category-cards/category-cards.component';
import { FbItemCardsComponent } from './components/fb-item-cards/fb-item-cards/fb-item-cards.component';
import { ServicesCardsComponent } from './components/services-cards/services-cards/services-cards.component';


@NgModule({
  declarations: [
    OrderComponent,
    ReviewOrdersComponent,
    HkComponent,
    HkHomeComponent,
    ItemCardsComponent,
    HkNavHeaderComponent,
    HkServicesComponent,
    HkAmenitiesComponent,
    CartComponent,
    FbHomeComponent,
    FbFoodComponent,
    FbDrinksComponent,
    FbComponent,
    FbNavHeaderComponent,
    CategoryCardsComponent,
    FbItemCardsComponent,
    ServicesCardsComponent,],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    OrderRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class OrderModule { }

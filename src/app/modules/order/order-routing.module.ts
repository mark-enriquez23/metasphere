import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './layouts/order/order.component'
import { ReviewOrdersComponent } from './pages/review-orders/review-orders.component';
import { HkComponent } from './layouts/hk/hk.component';
import { HkHomeComponent } from './pages/hk-home/hk-home.component';
import { HkServicesComponent } from './pages/hk-services/hk-services.component';
import { HkAmenitiesComponent } from './pages/hk-amenities/hk-amenities.component';
import { CartComponent } from './pages/cart/cart.component';
import { FbHomeComponent } from './pages/fb-home/fb-home.component';
import { FbFoodComponent } from './pages/fb-food/fb-food.component';
import { FbDrinksComponent } from './pages/fb-drinks/fb-drinks.component';
import { FbComponent } from './layouts/fb/fb.component';

// Resolvers
import { HkhomeResolver } from './pages/hk-home/resolvers/hkhome.resolver';
import { HkamenitiesResolver } from './pages/hk-amenities/resolvers/hkamenities.resolver';
import { FbhomeResolver } from './pages/fb-home/resolvers/fbhome.resolver';
import { HkServicesResolver } from './pages/hk-services/resolvers/hkservices.resolver';

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
          component: HkHomeComponent,
          resolve: { mainCategoryData: HkhomeResolver}
        },
        {
          path: 'services',
          component: HkServicesComponent,
          resolve: { servicesListData: HkServicesResolver}
        },
        {
          path: 'amenities',
          component: HkAmenitiesComponent,
          resolve: { itemListData: HkamenitiesResolver}
        },
        {
          path: 'cart',
          component: CartComponent
        }
    ]
  },
  {
    path: 'fb',
    component: FbComponent,
    children: [
        {
         path: '',
         redirectTo: 'home',
         pathMatch: 'full'
        },
        {
          path: 'home',
          component: FbHomeComponent,
          resolve: { orderListingData: FbhomeResolver}
        },
        {
          path: 'foods',
          component: FbFoodComponent
        },
        {
          path: 'drinks',
          component: FbDrinksComponent
        },
        {
          path: 'cart',
          component: CartComponent
        }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

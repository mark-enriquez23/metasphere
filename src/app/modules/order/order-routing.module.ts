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
          component: HkServicesComponent
        },
        {
          path: 'amenities',
          component: HkAmenitiesComponent
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
          component: FbHomeComponent
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

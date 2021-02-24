import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { HotelInformationComponent } from './pages/hotel-information/hotel-information.component'
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { FaqComponent } from './components/faq/faq.component';
import { ServicesComponent } from './components/services/services.component'


const routes: Routes = [
  {
    path: '',
    component: HotelInformationComponent,
    children: [
        {
         path: '',
         redirectTo: 'services',
         pathMatch: 'full'
        },
        {
          path: 'services',
          component: ServicesComponent
        },
        {
          path: 'facilities',
          component: FacilitiesComponent
        },
        {
          path: 'faq',
          component: FaqComponent
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelInformationRoutingModule { }

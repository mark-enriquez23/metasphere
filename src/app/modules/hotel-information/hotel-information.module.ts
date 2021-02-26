import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { HotelInformationRoutingModule } from './hotel-information-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { HotelInformationComponent } from './layouts/hotel-information/hotel-information.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component'

@NgModule({
  declarations: [
    FacilitiesComponent,
    FaqComponent,
    ServicesComponent,
    HotelInformationComponent,
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    HotelInformationRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HotelInformationRoutingModule]
})
export class HotelInformationModule { }

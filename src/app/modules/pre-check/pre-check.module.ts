import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PreCheckRoutingModule } from './pre-check-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { PreCheckComponent } from './pages/pre-check/pre-check.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
@NgModule({
  declarations: [
    PreCheckComponent,
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    PreCheckRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [PreCheckRoutingModule]
})
export class PreCheckModule { }

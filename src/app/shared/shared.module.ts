import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { PublicHeaderComponent } from './components/public-header/public-header.component';

@NgModule({
  declarations: [ PublicHeaderComponent ],
  exports: [ PublicHeaderComponent ],
  imports: [CommonModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PublicHeaderComponent } from './components/public-header/public-header.component';

@NgModule({
  declarations: [ PublicHeaderComponent ],
  exports: [ PublicHeaderComponent ],
  imports: [CommonModule, RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

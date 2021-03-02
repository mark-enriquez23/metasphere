import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [ PublicHeaderComponent, FooterComponent, ConfirmationDialogComponent ],
  exports: [ PublicHeaderComponent, FooterComponent ],
  imports: [CommonModule, RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

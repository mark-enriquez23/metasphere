import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { OptionsDialogComponent } from './components/options-dialog/options-dialog.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './utilities/spinner/spinner.component';

@NgModule({
  declarations: [ PublicHeaderComponent, FooterComponent, ConfirmationDialogComponent, OptionsDialogComponent, SpinnerComponent ],
  exports: [ PublicHeaderComponent, FooterComponent, OptionsDialogComponent, NgxSpinnerModule, SpinnerComponent ],
  imports: [CommonModule, RouterModule, NgxSpinnerModule,],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

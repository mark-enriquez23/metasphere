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
import { ValidateNationalitiesListPipe } from './pipes/validateList/validate-nationalities-list.pipe';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog/upload-dialog.component';


//Modules
import {ProgressBarModule} from "angular-progress-bar"

@NgModule({
  declarations: [ PublicHeaderComponent, FooterComponent, ConfirmationDialogComponent, OptionsDialogComponent, SpinnerComponent, ValidateNationalitiesListPipe, UploadDialogComponent ],
  exports: [ PublicHeaderComponent, FooterComponent, OptionsDialogComponent, NgxSpinnerModule, SpinnerComponent, ValidateNationalitiesListPipe, UploadDialogComponent ],
  imports: [CommonModule, RouterModule, NgxSpinnerModule, ProgressBarModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

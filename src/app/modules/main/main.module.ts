import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { MainComponent } from './pages/main/main.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
@NgModule({
  declarations: [
    MainComponent,
    NavHeaderComponent,
    MenuDialogComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MainRoutingModule]
})
export class MainModule { }

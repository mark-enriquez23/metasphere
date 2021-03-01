import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Components
import { LoginComponent } from './pages/login/login.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
@NgModule({
  declarations: [
    LoginComponent,
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LoginRoutingModule]
})
export class LoginModule { }

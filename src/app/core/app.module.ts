import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogModule } from '@ngneat/dialog';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PageLoaderComponent } from './layouts/page-loader/page-loader.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store'



@NgModule({
  declarations: [
    AppComponent,
    PageLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogModule.forRoot(),
    SharedModule,
    StoreModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

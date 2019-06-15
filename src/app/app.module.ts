import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { PersonalComponent } from './personalDetails/personalDetails.component';


import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {TabModule} from 'angular-tabs-component';

import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';



@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent



  ],
  imports: [
    BrowserModule, HttpModule, ReactiveFormsModule, AppRoutingModule,
    CommonModule,RouterModule,TabModule,PdfJsViewerModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MaterialFileUploadComponent } from './material-file-upload/material-file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialFileUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

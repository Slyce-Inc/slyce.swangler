import {AltInputComponent} from './alt-input.component';
import {NgModule} from '@angular/core';
import { AltFileUploadComponent } from './alt-file-upload/alt-file-upload.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AltInputComponent,
    AltFileUploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    AltInputComponent
  ]
})
export class AltInputModule {
}

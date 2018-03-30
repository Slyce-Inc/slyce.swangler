import {AltInputComponent} from './alt-input.component';
import {NgModule} from '@angular/core';
import { AltImageFileUploadComponent } from './alt-imagefile-upload/alt-imagefile-upload.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import { AltFileUploadComponent } from './alt-file-upload/alt-file-upload.component';

@NgModule({
  declarations: [
    AltInputComponent,
    AltImageFileUploadComponent,
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

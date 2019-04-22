import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Browser } from 'protractor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],

  exports: [
    BrowserAnimationsModule
  ]
})
export class AngularAnimationsModule { }

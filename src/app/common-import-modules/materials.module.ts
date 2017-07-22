/**
 * Node modules imported below
 * */
import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule
} from '@angular/material';

/**
 * Core module defined below
 * */
@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    MdCheckboxModule
  ]
})
export class MaterialsModule { }

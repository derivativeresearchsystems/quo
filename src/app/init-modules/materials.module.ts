/**
 * Node modules imported below
 * */
import { NgModule } from '@angular/core';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

/**
 * Core module defined below
 * */
@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule
  ]
})
export class MaterialsModule { }

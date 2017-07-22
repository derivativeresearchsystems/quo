/**
 * Node modules imported below
 * */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App modules imported below
 * */
import { QuoPipesModule } from '../quo-pipes/quo-pipes.module';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../common-import-modules/materials.module';

@NgModule({
  imports: [
    CommonModule,
    QuoPipesModule,
    MaterialsModule,
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class QuoComponentsModule { }

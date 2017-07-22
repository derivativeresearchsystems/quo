import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitCapsPipe } from './init-caps/init-caps.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InitCapsPipe
  ],
  exports: [
    InitCapsPipe
  ]
})
export class QuoPipesModule { }

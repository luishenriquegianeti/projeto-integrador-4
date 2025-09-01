import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Soma } from './soma/soma';



@NgModule({
  declarations: [
    Soma
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Soma
  ]
})
export class ContadorModule { }

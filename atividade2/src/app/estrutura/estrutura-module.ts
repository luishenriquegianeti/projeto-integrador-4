import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaComponent } from './diretiva/diretiva';  // Caminho está correto

@NgModule({
  declarations: [
    DiretivaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DiretivaComponent
  ]
})
export class EstruturaModule { }


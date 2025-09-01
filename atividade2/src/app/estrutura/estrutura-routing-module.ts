import { EstruturaModule } from './estrutura-module';
import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { diretiva } from './diretiva/diretiva';

const routes: Routes = [

  {path: 'diretiva', component: diretiva}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstruturaRoutingModule { }

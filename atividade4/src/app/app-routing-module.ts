import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'produtos-module',
    loadChildren: () => import('./produtos-module/produtos-module-module').then(m => m.ProdutosModuleModule)
  },

  {
    path: 'share-module',
    loadChildren: () => import('./shared-module/shared-module-module').then(m => m.SharedModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

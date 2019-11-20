import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroListarPage } from './cadastro-listar.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroListarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroListarPageRoutingModule {}

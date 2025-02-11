import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPensamentosComponent } from './pensamentos/criar-pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentosComponent } from './pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ExcluirPensamentosComponent } from './pensamentos/criar-pensamentos/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentosComponent } from './pensamentos/criar-pensamentos/pensamentos/editar-pensamentos/editar-pensamentos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full',
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent,
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentosComponent,
  },

  {
    path: 'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentosComponent,
  },
  {
    path: 'pensamentos/editarPensamentos/:id',
    component: EditarPensamentosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

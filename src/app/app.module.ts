import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CriarPensamentosComponent } from './pensamentos/criar-pensamentos/criar-pensamentos.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentosComponent } from './pensamentos/criar-pensamentos/listar-pensamentos/listar-pensamentos.component';
import { PensamentosComponent } from './pensamentos/criar-pensamentos/pensamentos/pensamentos.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirPensamentosComponent } from './pensamentos/criar-pensamentos/pensamentos/excluir-pensamentos/excluir-pensamentos.component';
import { EditarPensamentosComponent } from './pensamentos/criar-pensamentos/pensamentos/editar-pensamentos/editar-pensamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentosComponent,
    PensamentosComponent,
    ExcluirPensamentosComponent,
    EditarPensamentosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamentos';
import { PensamentosService } from '../pensamentos/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listasPensamentos: Pensamento[] = [];

  constructor(private service: PensamentosService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listasPensamentos = listaPensamentos;
    });
  }
}

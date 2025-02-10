import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos/pensamentos';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listasPensamento: Pensamento[] = [];

  constructor() {}

  ngOnInit(): void {}
}

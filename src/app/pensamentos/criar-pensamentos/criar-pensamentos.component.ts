import { Component, OnInit } from '@angular/core';
import { Pensamento } from './pensamentos/pensamentos';
import { PensamentosService } from './pensamentos/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };
  constructor(private service: PensamentosService, private router: Router) {}

  ngOnInit(): void {}
  CriarPensamentos() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelarPesamento() {
    this.router.navigate(['/listarPensamento']);
  }
}

import { ActivatedRoute, Router } from '@angular/router';
import { PensamentosService } from '../pensamento.service';
import { Pensamento } from './../pensamentos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamentos',
  templateUrl: './excluir-pensamentos.component.html',
  styleUrls: ['./excluir-pensamentos.component.css'],
})
export class ExcluirPensamentosComponent implements OnInit {
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  constructor(
    private service: PensamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }
  excluirPensamentos() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }
  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }
}

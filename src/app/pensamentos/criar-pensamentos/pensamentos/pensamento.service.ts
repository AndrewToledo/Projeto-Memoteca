import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamentos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentosService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamentos: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamentos);
  }

  editar(pensamentos: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamentos.id}`;
    return this.http.put<Pensamento>(url, pensamentos);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }
}

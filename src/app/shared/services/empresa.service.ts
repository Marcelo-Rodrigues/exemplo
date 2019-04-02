import { Empresa } from './../../pagina2/empresa';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  baseUrl = environment.baseUrl;
  public listaEmpresas$: BehaviorSubject<Empresa[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  atualizarEmpresas() {
    this.http
      .get<Empresa[]>(`${this.baseUrl}/empresas`)
      .subscribe(res => this.listaEmpresas$.next(res));
  }
}

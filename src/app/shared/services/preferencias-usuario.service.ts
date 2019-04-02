import { BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferenciasUsuarioService {
  public listaFavoritas$: BehaviorSubject<number[]> = new BehaviorSubject([]);

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  atualizarListaEmpresasFavoritas() {
    this.http.get<number[]>(`${this.baseUrl}/favoritas`)
    .subscribe(lista => this.listaFavoritas$.next(lista));
  }

  favoritarEmpresa(idEmpresa: number, favoritar: boolean) {
    this.http
      .post<number[]>(`${this.baseUrl}/favoritas/${idEmpresa}`, { favoritar })
      .subscribe(() => this.atualizarListaEmpresasFavoritas());
  }

  empresaFavorita(idEmpresa: number): boolean {
    return this.listaFavoritas$.value.includes(idEmpresa);
  }
}

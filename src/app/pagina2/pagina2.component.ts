import { Observable } from 'rxjs';
import { EmpresaService } from './../shared/services/empresa.service';
import { Empresa } from './empresa';
import { Component, OnInit } from '@angular/core';
import { PreferenciasUsuarioService } from '../shared/services/preferencias-usuario.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {

  empresas$: Observable<Empresa[]>;
  empresasFavoritas$: Observable<number[]>;
  constructor(private empresaService: EmpresaService, private servicoPreferenciasUsuario: PreferenciasUsuarioService) { }

  ngOnInit() {
    this.empresas$ = this.empresaService.listaEmpresas$;
    this.empresasFavoritas$ = this.servicoPreferenciasUsuario.listaFavoritas$;
    this.empresaService.atualizarEmpresas();
    this.servicoPreferenciasUsuario.atualizarListaEmpresasFavoritas();
  }

  empresaFavorita(idEmpresa: number) {
    return this.servicoPreferenciasUsuario.empresaFavorita(idEmpresa);
  }

  favoritarEmpresa(idEmpresa: number, favoritar: boolean) {
    this.servicoPreferenciasUsuario.favoritarEmpresa(idEmpresa, favoritar);
  }

}

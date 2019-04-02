import { PreferenciasUsuarioService } from './../../shared/services/preferencias-usuario.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visualizador-favoritas',
  templateUrl: './visualizador-favoritas.component.html',
  styleUrls: ['./visualizador-favoritas.component.css']
})
export class VisualizadorFavoritasComponent implements OnInit {
  favoritas$: Observable<number[]>;
  constructor(private servicoPreferenciasUsuario: PreferenciasUsuarioService) { }

  ngOnInit() {
    this.favoritas$ = this.servicoPreferenciasUsuario.listaFavoritas$;
  }

}

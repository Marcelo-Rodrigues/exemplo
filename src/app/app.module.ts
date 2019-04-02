import { MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from './pagina1/clientes.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';
import { VisualizadorFavoritasComponent } from './pagina2/visualizador-favoritas/visualizador-favoritas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    Pagina2Component,
    VisualizadorFavoritasComponent
  ],
  imports: [
    BrowserModule,
    MenuModule,
    SharedModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

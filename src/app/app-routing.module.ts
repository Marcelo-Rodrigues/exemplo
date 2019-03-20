import { Pagina2Component } from './pagina2/pagina2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pagina1Component } from './pagina1/pagina1.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }

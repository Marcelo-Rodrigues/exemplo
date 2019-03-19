import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from '../page2/page2.component';
import { Page1Component } from '../page1/page1.component';

const routes: Routes = [
  { path: '/menu1', component: Page1Component},
  { path: '/menu2', component: Page2Component}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class MenuRoutingModule { }

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from './models/menu.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  obterMenus() {
    return this.http
      .get<Menu[]>(`${this.baseUrl}/menus`)
      .pipe(map(menus => menus.map(menu => new Menu(menu))));
  }
}

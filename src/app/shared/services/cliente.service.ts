import { map, tap } from 'rxjs/operators';
import { Cliente } from './../models/cliente.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  adicionarCliente(cliente: Cliente) {
    return this.obterTodosClientes().pipe(
      tap(clientes => {
        cliente.id = this.obterProximoId(clientes);
        clientes.push(cliente);
        this.salvarClientes(clientes);
      })
    );
  }

  obterTodosClientes() {
    const clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes'));
    return of(clientes ? clientes : []);
  }

  atualizarCliente(cliente: Cliente) {
    return this.obterTodosClientes().pipe(
      tap(clientes => {
        const clienteEncontrado = clientes.find(this.clientePorId(cliente.id));

        Object.assign(clienteEncontrado, cliente);

        this.salvarClientes(clientes);
      })
    );
  }

  removerCliente(idCliente: number) {
    return this.obterTodosClientes().pipe(
      tap(clientes => {
        const indiceClienteEncontrado = clientes.findIndex(
          this.clientePorId(idCliente)
        );
        if (indiceClienteEncontrado > -1) {
          clientes.splice(indiceClienteEncontrado, 1);
          this.salvarClientes(clientes);
        }
      })
    );
  }

  private clientePorId(idCliente: number) {
    return (cliente: Cliente) => cliente.id === idCliente;
  }

  private salvarClientes(clientes: Cliente[]) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  private obterProximoId(clientes: Cliente[]) {
    return (
      clientes
        .map(cliente => cliente.id)
        .reduce((prev, curr) => Math.max(prev, curr), 0) + 1
    );
  }

  constructor() {}
}

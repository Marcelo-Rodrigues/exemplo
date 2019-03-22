import { ClienteService } from './../shared/services/cliente.service';
import { Cliente } from './../shared/models/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteEdicao: Cliente = null;
  constructor(private servicoCliente: ClienteService) {}

  ngOnInit() {
    this.servicoCliente.obterTodosClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.clienteEdicao = null;
    });
  }

  editar(cliente: Cliente) {
    this.clienteEdicao = cliente;
  }

  adicionar() {
    const novoCliente = new Cliente();
    this.clientes.push(novoCliente);
    this.clientes = this.clientes.slice();
    this.clienteEdicao = novoCliente;
  }

  salvar(cliente: Cliente) {
    if (cliente.id) {
      this.servicoCliente.atualizarCliente(cliente).subscribe(clientes => {
        this.clientes = clientes;
        this.clienteEdicao = null;
      });
    } else {
      this.servicoCliente.adicionarCliente(cliente).subscribe(clientes => {
        this.clientes = clientes;
        this.clienteEdicao = null;
      });
    }
  }

  excluir(cliente: Cliente) {
    this.servicoCliente
      .removerCliente(cliente.id)
      .subscribe(clientes => {
        this.clientes = clientes;
        this.clienteEdicao = null;
      });
  }

  obterId(cliente: Cliente) {
    return cliente.id || 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css'],
})
export class CozinhaComponent {
  constructor(private router: Router) {
    this.pedidos = [];
  }
  pedidos: any[];

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados() {
    this.Pedidos();

    setInterval(() => {
      this.Pedidos();
    }, 5000); // Atualiza a cada 5 segundos
  }

  Pedidos() {
    console.log('Iniciei a busca dos pedidos');

    let id_restaurante = localStorage.getItem('id');

    $.post(
      `https://kwr3pd-3000.csb.app/cozinhaWeb`,
      {
        id_restaurante: id_restaurante,
      },
      (res) => {
        console.log('Recebi alguma coisa');
        console.log(res);
        this.pedidos = res;
        this.BuscarNomeMesa();
      }
    );
  }

  BuscarNomeMesa() {
    console.log('Iniciei a busca dos nomes das mesas');

    for (let index = 0; index < this.pedidos.length; index++) {
      console.log(this.pedidos[index].id_mesa);
      $.post(
        `https://kwr3pd-3000.csb.app/mesaNome`,
        {
          id_mesa: this.pedidos[index].id_mesa,
        },
        (res) => {
          console.log(res[0].nome);
          this.pedidos[index].nomeMesa = res[0].nome;
        }
      );
    }
  }

  Entregar(id: string) {
    console.log('Entregando Pedido ao Cliente');

    $.post(
      `https://kwr3pd-3000.csb.app/entregarPedido`,
      {
        id: id,
      },
      (res) => {
        console.log(res);
        window.location.reload();
      }
    );
  }
}

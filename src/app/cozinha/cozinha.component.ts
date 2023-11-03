import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cozinha',
  templateUrl: './cozinha.component.html',
  styleUrls: ['./cozinha.component.css']
})
export class CozinhaComponent {

  constructor(private router: Router) {
    this.pedidos = [];
  }
  pedidos: any[];

  ngOnInit() {
    this.Pedidos();
  }

  Pedidos() {
    let id_restaurante = localStorage.getItem('id');

    $.post(`https://kwr3pd-4200.csb.app/cardapio`,
    {
      id_restaurante: id_restaurante
    }, (res) => {
      console.log("Recebi alguma coisa");
      console.log(res);
      this.pedidos = res;
    });
  }
}

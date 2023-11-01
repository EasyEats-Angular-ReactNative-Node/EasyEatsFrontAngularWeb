import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-adicionar-mesa',
  templateUrl: './modal-adicionar-mesa.component.html',
  styleUrls: ['./modal-adicionar-mesa.component.css']
})
export class ModalAdicionarMesaComponent {
  constructor(private router: Router) { }

  closeModalAdicionar() {
    window.location.reload()
  }

  cadastroPrato(nome: string, senhaMesa: string, mesa: string, descricao: string,) {
    let id_restaurante = localStorage.getItem("id");

    console.log('Cadastrando Prato');

    $.post(
      `https://kwr3pd-4200.csb.app/criarMesa`,
      {
        nome: nome,
        senhaMesa: senhaMesa,
        mesa: mesa,
        descricao: descricao,
        id_restaurante: id_restaurante
      },
      (res) => {
        console.log(res);
        console.log('Ovo Cadastra');
        window.location.reload();
      }
    );
  }
}

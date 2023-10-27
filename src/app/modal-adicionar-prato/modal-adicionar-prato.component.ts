import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-adicionar-prato',
  templateUrl: './modal-adicionar-prato.component.html',
  styleUrls: ['./modal-adicionar-prato.component.css']
})
export class ModalAdicionarPratoComponent {

  constructor(private router: Router) { }

  closeModalAdicionar() {
    window.location.reload()
  }



  cadastroPrato(nome: string, descricao: string, preco: string, categoria: string, ) {
    let id_restaurante = localStorage.getItem("id");

    console.log('Cadastrando Prato');

    $.post(
      `https://kwr3pd-3000.csb.app/cadastroPratoCardapio`,
      {
        nome: nome,
        categoria: categoria,
        preco: preco,
        descricao: descricao,
        link: "",
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

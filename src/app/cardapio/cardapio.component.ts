import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent {
  ngOnInit(){
    let modal_excluir = document.getElementById("box_modal_cardapio-excluir");
    let modal_adicionar = document.getElementById("box_modal_cardapio-adicionar");

    modal_excluir?.classList.add("box_modal_cardapio-excluir")
    modal_adicionar?.classList.add("box_modal_cardapio-adicionar")
  }

  openModal() {
    let modal_abrir = document.getElementById("box_modal_cardapio-excluir");

    modal_abrir?.classList.remove("box_modal_cardapio-excluir");
    modal_abrir?.classList.add("box_modal_cardapio-excluir-1");
  }
  openModalAdicionar() {
    let modal_abrir_adicionar = document.getElementById("box_modal_cardapio-adicionar");

    modal_abrir_adicionar?.classList.remove("box_modal_cardapio-adicionar");
    modal_abrir_adicionar?.classList.add("box_modal_cardapio-adicionar-1");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  constructor(private router: Router) { }

  ngOnInit() {

    let modal_excluir = document.getElementById("box_modal_mesa-excluir");
    let modal_adicionar = document.getElementById("box_modal_mesa-adicionar");

    modal_excluir?.classList.add("box_modal_mesa-excluir")
    modal_adicionar?.classList.add("box_modal_mesa-adicionar")
  }
  openModalExcluir() {

    let modal_abrir = document.getElementById("box_modal_mesa-excluir");

    modal_abrir?.classList.remove("box_modal_mesa-excluir");
    modal_abrir?.classList.add("box_modal_mesa-excluir-1");
  }
  openModalAdicionar() {
    let modal_abrir_adicionar = document.getElementById("box_modal_mesa-adicionar");

    modal_abrir_adicionar?.classList.remove("box_modal_mesa-adicionar");
    modal_abrir_adicionar?.classList.add("box_modal_mesa-adicionar-1");
  }
}

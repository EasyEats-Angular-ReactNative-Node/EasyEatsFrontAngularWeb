import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent {

  constructor(private router: Router) {
    this.restaurantes = [];
  }
  restaurantes: any[];

  ngOnInit() {

    let cargo = localStorage.getItem('cargo');

    if (cargo != "1") {
      window.location.href = "/login";
      alert('Sai fora tio');
    }

    this.Restaurantes();

    let modal_hide = document.getElementById("box_modal_component");
    let modal_hide_adicionar = document.getElementById("box_modal_component_adicionar");

    modal_hide?.classList.add("box-modal-component");
    modal_hide_adicionar?.classList.add("box_modal_component_adicionar");
  }

  openModal() {
    console.log("Botão acionado");

    let btn_modal = document.getElementById("box_modal_component");

    btn_modal?.classList.add("box-modal-component_1");
    btn_modal?.classList.remove("box-modal-component");

  }
  openModalAdicionar() {
    console.log("Botão acionado");

    let btn_modal = document.getElementById("box_modal_component_adicionar");

    btn_modal?.classList.remove("box_modal_component_adicionar");
    btn_modal?.classList.add("box_modal_component_adicionar_1");
  }

  exibirRestaurantes(restaurantes: any[]) {
    this.restaurantes = restaurantes;
  }

  Restaurantes() {
    $.post(`https://3chpc8-3000.csb.app/restaurantes`, {}, (res) => {
      let restaurantes = res;
      console.log("Recebi alguma coisa");
      console.log(res);
      this.exibirRestaurantes(restaurantes);
    });
  }
}

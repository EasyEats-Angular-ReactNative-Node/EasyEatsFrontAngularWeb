import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-excluir-restaurante',
  templateUrl: './modal-excluir-restaurante.component.html',
  styleUrls: ['./modal-excluir-restaurante.component.css']
})
export class ModalExcluirRestauranteComponent {

  constructor(private router: Router) {}
  deletarID = localStorage.getItem('deletarID');

  ExcluirRestaurante(id: string) {

    console.log('Passei no primeiro ponto do login');
    console.log('Ovo Exclui');
    $.post(
      `https://3chpc8-3000.csb.app/excluirRestaurante`,
      {
        id: id
      },
      (res) => {
        console.log(res);
        alert(res);
        window.location.reload();
      }
    );
  }

  fecharModal(){
    window.location.reload();
  }
}

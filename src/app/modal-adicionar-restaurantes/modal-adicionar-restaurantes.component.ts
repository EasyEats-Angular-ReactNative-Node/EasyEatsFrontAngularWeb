import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-adicionar-restaurantes',
  templateUrl: './modal-adicionar-restaurantes.component.html',
  styleUrls: ['./modal-adicionar-restaurantes.component.css']
})
export class ModalAdicionarRestaurantesComponent {
  constructor(private router: Router) { }


  fecharModal() {
    window.location.reload();
  }

  cadastroRestaurante(nome: string, senha: string) {

    console.log('Passei no primeiro ponto do login');

    $.post(
      `https://3chpc8-3000.csb.app/cadastroRestaurante`,
      {
        nome: nome,
        senha: senha
      },
      (res) => {
        console.log(res);
        console.log('Ovo Cadastra');
        window.location.reload();
      }
    );
  }

}

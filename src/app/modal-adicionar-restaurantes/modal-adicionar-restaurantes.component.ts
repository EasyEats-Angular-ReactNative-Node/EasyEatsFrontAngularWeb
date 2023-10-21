import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-restaurantes',
  templateUrl: './modal-adicionar-restaurantes.component.html',
  styleUrls: ['./modal-adicionar-restaurantes.component.css']
})
export class ModalAdicionarRestaurantesComponent {
  fecharModal(){    
    window.location.reload();
  }
}

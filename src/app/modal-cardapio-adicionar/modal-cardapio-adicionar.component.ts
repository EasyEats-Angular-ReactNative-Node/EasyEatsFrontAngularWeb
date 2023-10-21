import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-cardapio-adicionar',
  templateUrl: './modal-cardapio-adicionar.component.html',
  styleUrls: ['./modal-cardapio-adicionar.component.css']
})
export class ModalCardapioAdicionarComponent {
  closeModalAdicionar() {
    window.location.reload()
  }
}

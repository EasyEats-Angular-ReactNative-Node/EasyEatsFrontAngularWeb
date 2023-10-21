import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-cardapio-excluir',
  templateUrl: './modal-cardapio-excluir.component.html',
  styleUrls: ['./modal-cardapio-excluir.component.css']
})
export class ModalCardapioExcluirComponent {
  closeModal() {
    window.location.reload()
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-prato',
  templateUrl: './modal-adicionar-prato.component.html',
  styleUrls: ['./modal-adicionar-prato.component.css']
})
export class ModalAdicionarPratoComponent {
  closeModalAdicionar() {
    window.location.reload()
  }
}

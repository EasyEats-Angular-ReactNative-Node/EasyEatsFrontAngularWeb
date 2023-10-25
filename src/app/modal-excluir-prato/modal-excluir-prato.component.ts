import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-excluir-prato',
  templateUrl: './modal-excluir-prato.component.html',
  styleUrls: ['./modal-excluir-prato.component.css']
})
export class ModalExcluirPratoComponent {
  closeModal() {
    window.location.reload()
  }
}

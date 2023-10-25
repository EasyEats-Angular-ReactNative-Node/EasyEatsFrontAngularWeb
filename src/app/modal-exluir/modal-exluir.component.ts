import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-modal-exluir',
  templateUrl: './modal-exluir.component.html',
  styleUrls: ['./modal-exluir.component.css']
})
export class ModalExluirComponent {

  fecharModal(){
    window.location.reload();
  }
}

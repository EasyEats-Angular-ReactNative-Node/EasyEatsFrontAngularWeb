import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-funcao-autenticadora',
  templateUrl: './funcao-autenticadora.component.html',
  styleUrls: ['./funcao-autenticadora.component.css']
})
export class FuncaoAutenticadoraComponent {

  constructor(private router: Router) {}

  id = localStorage.getItem('id')

  ngOnInit(){
    console.log(this.id);
    let cargo = localStorage.getItem('cargo');

    if (cargo != "1") {
      window.location.href = "/login";
      alert('Você não está logado!');
    }
  }
}

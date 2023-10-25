import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  Login(nome: string, senha: string) {

    console.log('Passei no primeiro ponto do login');

    $.post(
      `https://3chpc8-3000.csb.app/login`,
      {
        nome: nome,
        senha: senha
      },
      (res) => {
        console.log(res);
        console.log('Passei no segundo ponto do login');

        if (res === "Senha incorreta") {
          alert('Senha incorreta')
          this.router.navigate(['/login']);
        } else if (res === "Usuário não encontrado") {
          alert('Usuário não encontrado')
          this.router.navigate(['/login']);
        } else if (res[0].ID === 1) {
          this.localStorage(res[0].ID, res[0].nome, res[0].senha, res[0].endereco, res[0].link, res[0].descricao);
          this.router.navigate(['/restaurantes']);
        } else {
          this.localStorage(res[0].ID, res[0].nome, res[0].senha, res[0].endereco, res[0].link, res[0].descricao);
          this.router.navigate(['/menu-restaurante']);
        }
      },
    );
  }

  localStorage(id: string, nome: string, senha: string, endereco: string, link: string, descricao: string) {
    console.log('Fui acionado');

    localStorage.setItem('id', id); //salvando o id no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('link', link);
    localStorage.setItem('descricao', descricao);
  }
}
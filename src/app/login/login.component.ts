import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }

  Login(usuario: string, senha: string) {

    console.log('Passei no primeiro ponto do login');
    $.post(
      `https://kwr3pd-4200.csb.app/login`,
      {
        usuario: usuario,
        senha: senha
      },
      (res) => {
        console.log(res);
        console.log('Passei no segundo ponto do login');

        if (res === "Senha incorreta") {
          alert('Senha incorreta')
          // this.router.navigate(['/login']);
          window.location.reload();
        } else if (res === "Usuário não encontrado") {
          alert('Usuário não encontrado')
          // this.router.navigate(['/login']);
          window.location.reload();
        } else if (res === "Status Inativo"){
          alert('Seu acesso foi negado pelos administradores, por favor entre em contato com a equipe de suporte.')
          window.location.reload();
        }
        else if (res[0].ID === 1) {
          this.localStorage(res[0].ID, res[0].usuario, res[0].nome, res[0].senha, res[0].endereco, res[0].link, res[0].descricao, res[0].cargo);
          this.router.navigate(['/restaurantes']);
        } else {
          this.localStorage(res[0].ID, res[0].usuario, res[0].nome, res[0].senha, res[0].endereco, res[0].link, res[0].descricao, res[0].cargo);
          this.router.navigate(['/menu-restaurante']);
        }
        console.log(res[0].cargo);

      },
    );
  }

  localStorage(id: string, usuario: string, nome: string, senha: string, endereco: string, link: string, descricao: string, cargo: string) {
    console.log('Fui acionado');

    localStorage.setItem('id', id); //salvando o id no localStorage
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('link', link);
    localStorage.setItem('descricao', descricao);
    localStorage.setItem('cargo', cargo);
  }
}

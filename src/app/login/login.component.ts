import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login() {
    const email = document.getElementById("email") as HTMLInputElement;
    const senha = document.getElementById("senha") as HTMLInputElement;

    const dados = {
      email,
      senha,
    };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Requisição realizada com sucesso.");
        console.log(data);

        if (data.status === "sucesso") {
          alert("Login realizado com sucesso!");
        } else {
          alert("Usuário ou senha inválidos.");
        }
      })
      .catch((error) => {
        console.log("Erro ao realizar requisição.");
        console.log(error);
      });
  }

}

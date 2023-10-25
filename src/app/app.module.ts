import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { MenuRestauranteComponent } from './menu-restaurante/menu-restaurante.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { PratoComponent } from './prato/prato.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesaComponent } from './mesa/mesa.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { HeaderComponent } from './header/header.component';
import { ModalAdicionarRestauranteComponent } from './modal-adicionar-restaurante/modal-adicionar-restaurante.component';
import { ModalExcluirRestauranteComponent } from './modal-excluir-restaurante/modal-excluir-restaurante.component';
import { ModalAdicionarPratoComponent } from './modal-adicionar-prato/modal-adicionar-prato.component';
import { ModalExcluirPratoComponent } from './modal-excluir-prato/modal-excluir-prato.component';
import { ModalAdicionarMesaComponent } from './modal-adicionar-mesa/modal-adicionar-mesa.component';
import { ModalExcluirMesaComponent } from './modal-excluir-mesa/modal-excluir-mesa.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestaurantesComponent,
    MenuRestauranteComponent,
    PerfilComponent,
    CardapioComponent,
    PratoComponent,
    MesasComponent,
    MesaComponent,
    CozinhaComponent,
    HeaderComponent,
    ModalAdicionarRestauranteComponent,
    ModalExcluirRestauranteComponent,
    ModalAdicionarPratoComponent,
    ModalExcluirPratoComponent,
    ModalAdicionarMesaComponent,
    ModalExcluirMesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

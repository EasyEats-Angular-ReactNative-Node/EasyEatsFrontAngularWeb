import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { ExcluirRestauranteComponent } from './excluir-restaurante/excluir-restaurante.component';
import { CriarRestauranteComponent } from './criar-restaurante/criar-restaurante.component';
import { MenuRestauranteComponent } from './menu-restaurante/menu-restaurante.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ExcluirPratoComponent } from './excluir-prato/excluir-prato.component';
import { CriarPratoComponent } from './criar-prato/criar-prato.component';
import { PratoComponent } from './prato/prato.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesaComponent } from './mesa/mesa.component';
import { ExcluirMesaComponent } from './excluir-mesa/excluir-mesa.component';
import { CriarMesaComponent } from './criar-mesa/criar-mesa.component';
import { CozinhaComponent } from './cozinha/cozinha.component';
import { HeaderComponent } from './header/header.component';
import { ModalExluirComponent } from './modal-exluir/modal-exluir.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RestaurantesComponent,
    ExcluirRestauranteComponent,
    CriarRestauranteComponent,
    MenuRestauranteComponent,
    PerfilComponent,
    CardapioComponent,
    ExcluirPratoComponent,
    CriarPratoComponent,
    PratoComponent,
    MesasComponent,
    MesaComponent,
    ExcluirMesaComponent,
    CriarMesaComponent,
    CozinhaComponent,
    HeaderComponent,
    ModalExluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

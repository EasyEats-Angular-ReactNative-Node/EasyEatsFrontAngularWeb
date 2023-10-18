import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ExcluirMesaComponent } from './excluir-mesa/excluir-mesa.component';
import { CriarMesaComponent } from './criar-mesa/criar-mesa.component';
import { MesaComponent } from './mesa/mesa.component';
import { CozinhaComponent } from './cozinha/cozinha.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'excluir-restaurante', component: ExcluirRestauranteComponent },
  { path: 'criar-restaurante', component: CriarRestauranteComponent },
  { path: 'menu-restaurante', component: MenuRestauranteComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'cardapio', component: CardapioComponent },
  { path: 'excluir-prato', component: ExcluirPratoComponent },
  { path: 'criar-prato', component: CriarPratoComponent },
  { path: 'prato', component: PratoComponent },
  { path: 'mesas', component: MesasComponent },
  { path: 'excluir-mesa', component: ExcluirMesaComponent },
  { path: 'criar-mesa', component: CriarMesaComponent },
  { path: 'mesa', component: MesaComponent },
  { path: 'cozinha', component: CozinhaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

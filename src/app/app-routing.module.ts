import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConectaComponent } from './conecta/conecta.component';

// Imports do Icones do Menu
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'conecta', component:ConectaComponent},  
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'vagas', component:VagasComponent},
  {path: 'mensagens', component:MensagensComponent},
  {path: 'notificacao', component:NotificacaoComponent},
  {path: 'curriculo', component:CurriculoComponent},
  {path: 'home', component:HomeComponent},
  //não precisa path para o início},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

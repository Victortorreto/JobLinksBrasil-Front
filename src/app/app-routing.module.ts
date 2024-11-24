import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports do Icones do Menu
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { AppComponent } from './app.component'; 

const routes: Routes = [

  {path: 'perfil', component: PerfilComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'vagas', component:VagasComponent},
  {path: 'curriculo', component:CurriculoComponent},
  {path: 'mensagens', component:MensagensComponent},
  {path: 'mensagens', component:MensagensComponent},
  {path: 'notificacao', component:NotificacaoComponent},
  {path: 'notificacao', component:NotificacaoComponent},
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component: HomeComponent },
  
  //não precisa path para o início},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

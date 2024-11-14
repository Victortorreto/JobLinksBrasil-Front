import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imports do Icones do Menu
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'vagas', component:VagasComponent},
  {path: 'mensagens', component:MensagensComponent},
  {path: 'notificacao', component:NotificacaoComponent},
  {path: 'home', component:HomeComponent},
  {path: '', component: HomeComponent },
  //não precisa path para o início},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

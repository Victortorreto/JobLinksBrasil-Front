import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';

import { ConectaComponent } from './conecta/conecta.component';

// Imports do Icones do Menu
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';

const routes: Routes = [
  {path: 'test', component:TestComponent},
  {path: 'itemdropdown', component:ItemDropdownComponent},
  {path: 'conecta', component:ConectaComponent},

  {path: 'perfil', component:PerfilComponent},
  {path: 'vagas', component:VagasComponent},
  {path: 'mensagens', component:MensagensComponent},
  {path: 'notificacao', component:NotificacaoComponent},
  //não precisa path para o início},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

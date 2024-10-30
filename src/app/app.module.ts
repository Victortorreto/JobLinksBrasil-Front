import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { ItemDropdownComponent } from './item-dropdown/item-dropdown.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ConectaComponent } from './conecta/conecta.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PerfilComponent } from './perfil/perfil.component';
import { VagasComponent } from './vagas/vagas.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacaoComponent } from './notificacao/notificacao.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    ItemDropdownComponent,
    TestComponent,
    ConectaComponent,
    PerfilComponent,
    VagasComponent,
    MensagensComponent,
    NotificacaoComponent,
    LoginComponent,
    
   
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,  MatButtonModule,
    MatMenuModule,
    MatIconModule,MatFormFieldModule,MatInputModule, HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  senha: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  login() {
    const credenciais = { email: this.email, senha: this.senha };

    this.usuarioService.loginUsuario(credenciais).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido', response);
        // Redireciona para a página principal após login bem-sucedido
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(credenciais)
        console.error('Erro no login', error);
        alert('Email ou senha incorretos!');
      }
    });
  }
}


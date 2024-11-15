import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email: string = '';
  password: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  cadastro() {
    const credenciais = { email: this.email, senha: this.password };

    this.usuarioService.cadastrarUsuario(credenciais).subscribe({
      next: (response) => {
        console.log('Cadastro bem-sucedido', response);
        // Redireciona para a página principal após login bem-sucedido
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(credenciais)
        console.error('Erro no cadastro', error);
        alert('Email ou senha já cadastrados!');
      }
    });
  }
}

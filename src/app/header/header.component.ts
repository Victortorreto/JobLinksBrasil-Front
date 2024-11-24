import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  // Variável que controla a abertura/fechamento do menu
  isMenuOpen: boolean = false;

  // Função para alternar o menu (abrir/fechar)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna entre true/false
  }
  
  constructor(private router: Router) {}

  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }
  
}

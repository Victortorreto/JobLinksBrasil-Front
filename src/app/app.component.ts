import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobsLinks';

   // Variável que controla a abertura/fechamento do menu
   isMenuOpen: boolean = false;

   // Função para alternar o menu (abrir/fechar)
   toggleMenu() {
     this.isMenuOpen = !this.isMenuOpen; // Alterna entre true/false
   }

  constructor(public router: Router) {}

  navigateToPage(path: string): void {
    this.router.navigate([path]);
  }
}

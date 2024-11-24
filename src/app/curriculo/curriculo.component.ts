import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrl: './curriculo.component.css'
})
export class CurriculoComponent {
  mostrarCurriculoAfonso: boolean = false;
  mostrarCurriculoRomulo: boolean = false;
  mostrarCurriculoVictor: boolean = false;

  // Função chamada quando o usuário clica no link "Currículo"
  toggleCurriculoAfonso() {
    this.mostrarCurriculoAfonso = !this.mostrarCurriculoAfonso;
  }

  toggleCurriculoRomulo() {
    this.mostrarCurriculoRomulo = !this.mostrarCurriculoRomulo;
  }

  toggleCurriculoVictor() {
    this.mostrarCurriculoVictor = !this.mostrarCurriculoVictor;
  }

}

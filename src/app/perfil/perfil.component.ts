import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  isPanelOpen: boolean = false;
  isExperOpen: boolean = false;
  isSobreOpen: boolean = false;
  isSkillslOpen: boolean = false;
  isLanguagelOpen: boolean = false;

  aboutText: string = 'Escreva aqui sobre você, seus hobby, o que está buscando e seus objetivos.';
 
  // Dados dinâmicos de Experiência
  experiences = [
    { position: 'Lead Front-End Developer', company: 'Microsoft', duration: 'Feb 2022 - Present', description: 'Programador Senior.' },
    { position: 'Junior Developer', company: 'Google', duration: 'Jan 2020 - Jan 2022', description: 'Programador Junior, realizava tarefas de banco de dados, tratamentos de dados e outros.' }
  ];

  // Dados dinâmicos de Educação
  educationList = [
    { degree: 'Bacharel em Ciência da Computação', school: 'Universidade USP-SP', duration: '2016 - 2020' }
  ];

  // Dados de Habilidades
  skills = ['JavaScript', 'HTML', 'CSS', 'Java', 'Angular'];

  // Dados de Idiomas
  languages = ['English', 'Portuguese'];

  // Novos dados a serem adicionados
  newExperience = { position: '', company: '', duration: '', description: '' };
  newEducation = { degree: '', school: '', duration: '' };
  newSkill = '';
  newLanguage = '';

  imageUrlExpe: string = 'src/work-experience.png';
  imageUrlEdu: string = 'assets\education-forma.png';
  imageUrlFundo: string | ArrayBuffer | null = null;
  imageUrl: string | ArrayBuffer | null = null; // Armazena a URL da imagem ou null
  @ViewChild('fileInput') fileInput!: ElementRef; // Referência ao input de arquivo
  @ViewChild('fileInputFundo') fileInputFundo!: ElementRef; 
 

  // Função chamada quando uma imagem é selecionada
  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result; 
      };
      reader.readAsDataURL(file);  
    }
  }

  // Função para abrir o input de arquivo ao clicar no ícone
  triggerFileInput(): void {
    const fileInput = this.fileInput.nativeElement as HTMLInputElement;
    fileInput.click(); // Aciona o clique no input de arquivo
  }

   // Função chamada quando uma imagem é selecionada
   onImageSelectedFundo(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrlFundo = reader.result;  
      };
      reader.readAsDataURL(file);  
    }
  }

  triggerFileInputFundo(): void {
    const fileInputFundo = this.fileInputFundo.nativeElement as HTMLInputElement;
    fileInputFundo.click();
  }

  // Função que alterna entre o painel de Educação e o de Experiência
  togglePanel(panelType: string) {
    if (panelType === 'edu') {
      this.isPanelOpen = !this.isPanelOpen;  // Alterna o painel de Educação
      this.isExperOpen = false;  // Garante que o painel de Experiência seja fechado
      this.isSobreOpen = false;
      this.isSkillslOpen = false;
      this.isLanguagelOpen = false;
    } else if (panelType === 'exper') {
      this.isExperOpen = !this.isExperOpen;  // Alterna o painel de Experiência
      this.isPanelOpen = false;  // Garante que o painel de Educação seja fechado
      this.isSobreOpen = false;
      this.isSkillslOpen = false;
      this.isLanguagelOpen = false;
    } else if (panelType === 'sobre') {
      this.isSobreOpen = !this.isSobreOpen;
      this.isPanelOpen = false;
      this.isExperOpen = false;
      this.isSkillslOpen = false;
      this.isLanguagelOpen = false;
    } else if (panelType === 'habi') {
      this.isSkillslOpen = !this.isSkillslOpen;
      this.isSobreOpen = false;
      this.isPanelOpen = false;
      this.isExperOpen = false;
      this.isLanguagelOpen = false;
    } else if (panelType === 'idioma') {
      this.isLanguagelOpen = !this.isLanguagelOpen;
      this.isSkillslOpen = false;
      this.isSobreOpen = false;
      this.isPanelOpen = false;
      this.isExperOpen = false;
    }

  }
  // Função para fechar o painel
  closePanel() {
    this.isPanelOpen = false;
    this.isExperOpen = false;
    this.isSobreOpen = false;
    this.isSkillslOpen = false;
    this.isLanguagelOpen = false;
  }

   // Funções para adicionar e remover entradas

  addExperience() {
    if (this.newExperience.position && this.newExperience.company) {
      this.experiences.push({ ...this.newExperience });
      this.resetExperienceForm();
    }
  }

  removeExperience(index: number) {
    this.experiences.splice(index, 1);
  }

  addEducation() {
    if (this.newEducation.degree && this.newEducation.school) {
      this.educationList.push({ ...this.newEducation });
      this.resetEducationForm();
    }
  }

  removeEducation(index: number) {
    this.educationList.splice(index, 1);
  }

  addSkill() {
    if (this.newSkill) {
      this.skills.push(this.newSkill);
      this.newSkill = '';
    }
  }

  addLanguage() {
    if (this.newLanguage) {
      this.languages.push(this.newLanguage);
      this.newLanguage = '';
    }
  }


  // Funções para resetar os formulários após a adição
  resetExperienceForm() {
    this.newExperience = { position: '', company: '', duration: '', description: '' };
  }

  resetEducationForm() {
    this.newEducation = { degree: '', school: '', duration: '' };
  }
}


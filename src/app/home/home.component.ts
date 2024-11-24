import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @ViewChild('photoInput') photoInput!: ElementRef;
  @ViewChild('videoInput') videoInput!: ElementRef;
  @ViewChild('documentInput') documentInput!: ElementRef; 
  
  userPhoto: string = "https://www.pngall.com/wp-content/uploads/5/Profile.png"; // Foto do usuário
  newPostContent: string = '';
  selectedPhoto: File | null = null;
  selectedVideo: File | null = null;
  selectedDocument: File | null = null;
  posts: Array<any> = []; // Lista de postagens 

   // Função para disparar o input de foto ou vídeo
   triggerFileInput(type: string) {
    if (type === 'photo' && this.photoInput) {
      this.photoInput.nativeElement.click(); // Dispara o clique no input de foto
    } else if (type === 'video' && this.videoInput) {
      this.videoInput.nativeElement.click(); // Dispara o clique no input de vídeo
    } else if (type === 'doc' && this.documentInput) {
      this.documentInput.nativeElement.click(); // Dispara o clique no input de documento
    }
  }

  // Função para lidar com a seleção de arquivos (imagem ou vídeo)
  onFileChange(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      if (type === 'photo') {
        this.selectedPhoto = file;
      } else if (type === 'video') {
        this.selectedVideo = file;
      } else if (type === 'doc') {
        this.selectedDocument = file;
      }
    }
  }


  // Função para postar o conteúdo
  postContent() {
    if (!this.newPostContent.trim() && !this.selectedPhoto && !this.selectedVideo && !this.selectedDocument) {
      alert('Please add content to post!');
      return;
    }

    const newPost = {
      userName: 'Nome Do Usuário', // Nome do autor
      userPhoto: this.userPhoto, // Foto do autor
      content: this.newPostContent.trim(), // Texto do post
      photo: this.selectedPhoto ? URL.createObjectURL(this.selectedPhoto) : null, // Foto postada
      video: this.selectedVideo ? URL.createObjectURL(this.selectedVideo) : null, // Vídeo postado
      document: this.selectedDocument ? URL.createObjectURL(this.selectedDocument) : null, // Documento postado
  
    };

    this.posts.unshift(newPost); // Adiciona o post ao topo da lista de posts
    this.newPostContent = ''; // Limpa o campo de texto
    this.selectedPhoto = null; // Limpa a foto selecionada
    this.selectedVideo = null; // Limpa o vídeo selecionado
    this.selectedDocument = null;
  }
}
 


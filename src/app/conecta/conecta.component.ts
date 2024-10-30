import { Component } from '@angular/core';
import { ServerService } from '../server.service';
import { valores,valoresPost } from './Model/respostaModel';


@Component({
  selector: 'app-conecta',
  templateUrl: './conecta.component.html',
  styleUrls: ['./conecta.component.css']
})
export class ConectaComponent {
  constructor(public servico:ServerService){
  }


  val:valores[]=[];
  client : valoresPost={} as valoresPost;
  clientResult : valoresPost={} as valoresPost;
  vItemNome: string = "";
  vItemJob: string = "";


 //adicionar esses 3 atributos
  code: string = "";
  vItemcode: string = "";
  clientResultNome: string ="";


  chamadaBack(){
    this.val=[];
    this.clientResult={}as valoresPost;
       this.servico.getTodosUsuarios().subscribe((resposta : any)=>
    {
      console.log(resposta.data);    
      this.val = (resposta.data);
      console.log(this.val);           
    })   
  }




  chamadaBackPost(){
    this.code = this.vItemcode;
    this.servico.postUsuario(this.code).subscribe((resp : any)=>
    {  
      alert("Cadastro ok - "+resp);
      this.clientResultNome = resp;
      console.log(resp);
    },
    (error : any)=>{
      alert("error: "+error);
    }   
    )   
  }
}


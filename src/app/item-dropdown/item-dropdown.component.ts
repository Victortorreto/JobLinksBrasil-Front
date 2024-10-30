import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-item-dropdown',
  templateUrl: './item-dropdown.component.html',
  styleUrls: ['./item-dropdown.component.css']
})


export class ItemDropdownComponent implements OnInit {  
  select1: any ={};
  select2 ="Selecione";
  cidade: string = "";
  cidades: any =[];
  pais: any=[];
  
paises = [
    {
      id:0,
      nome:"Selecione",
      cidades:["Selecione"],
    },
    {
      id:1,
      nome:"França",
      cidades:["Paris", "Marseille", "Nice"],
    },
    {
      id:2,
      nome:"Alemanha",
      cidades:["Hamburgo", "Berlim", "Munique"],
    },
    {
      id:3,
      nome:"Itália",
      cidades:["Roma", "Milão", "Veneza"],
    },
    {
      id:4,
      nome:"Brasil",
      cidades:["São Paulo", "Lajeado", "Santa Rita do Sapucaí"],
    },
  ];
  constructor(){}
  ngOnInit() {
    this.select1 = 0;
    this.cidades = this.paises.filter((x)=> x.id == this.select1)[0].cidades;
  }
  onChange(){
    this.select2 = "";
    this.cidades = this.paises.filter((x)=> x.id == this.select1)[0].cidades;
  }  
  clickButton(){
    this.pais = this.paises.find((x)=> x.id == this.select1)?.nome;
    this.cidade = this.select2;
  }
}

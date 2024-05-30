import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor (private router: Router){}

  verDetalhes(imovelId: string){
    this.router.navigate(['/details', imovelId]);
  }

  // BINDING DE DADOS
  // imoveis: string[] = ['Casa Magnifica', 'Apartamento Padrão', 'Casa de Campo','Campo Belo'];
  imoveis: Array<any> = [
    {
      id: 1,
      titulo: "Casa Magnifica",
      foto: "https://plantasdecasas.com/wp-content/uploads/2016/11/309-plantas-de-casas-fachadas-front.jpg",
      quartos: 4,
      banheiros: 4,
      area: 360,
      preco: 990000,
      favorito: true
    },
    {
      id: 2,
      titulo: "Apartamento Padrão",
      foto: "https://www.lorenzini.com.br/storage/informativos/7B4MmCXwu6T4L8B5NU2VzKGhdojLqwY20ujPCIm1.jpeg",
      quartos: 2,
      banheiros: 1,
      area: 45,
      preco: 120000,
      favorito: false
    },
    {
      id: 3,
      titulo: "Casa de Campo",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVOx7_8nYEB7poCTVa-TDuBxbZXL9AHUTUw&s",
      quartos: 7,
      banheiros: 5,
      area: 800,
      preco: 1500000,
      favorito: false
    }
  ]
}

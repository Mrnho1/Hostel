import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // BINDING DE DADOS
  imoveis: string[] = ['Casa Magnifica', 'Apartamento Padrão', 'Casa de Campo'];
}

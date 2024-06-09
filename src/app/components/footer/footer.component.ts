import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  redes: Array<any> = [
    {
      id: 1,
      titulo: 'Facebook',
      icons: 'https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000',
      link: "link tal"
    },
    {
      id: 2,
      titulo: 'Instagram',
      icons: 'https://img.icons8.com/?size=100&id=32323&format=png&color=000000',
      link: 'link tal'
    },
    {
      id: 3,
      titulo: 'LinkedIn',
      icons: 'https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000',
      link: 'link tal'
    }
  ]
}

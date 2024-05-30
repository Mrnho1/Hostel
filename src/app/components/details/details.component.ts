import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  imovelId: string;

  constructor(private router: ActivatedRoute){}


  ngOnInit(): void{
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.imovelId = params.get('id') ?? '';
    });
    
  }

}

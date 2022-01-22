import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';




@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card {
      margin-top : 20px;
    }

    img {
      width: 100%
    }
    `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input()
  heroe!: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}

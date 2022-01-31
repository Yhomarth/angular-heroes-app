import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {


  publishers = [
    {
      id          : 'DC Comics',
      descripcion : 'DC - Comics'
    },
    {
      id          : 'Marvel Comics',
      descripcion : 'Marvel Comics'
    }
  ];

  heroe !: Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}

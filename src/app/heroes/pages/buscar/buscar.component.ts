import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


  termino : string = '';
  heroes : Heroe[] = [];
  heroeSeleccionado !: Heroe | undefined;



  constructor(private heroeService : HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(){
    this.heroeService.getSugerencias( this.termino )
      .subscribe(  heroes => this.heroes = heroes );

      


  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    const  heroe: Heroe = event.option.value;



    if (typeof heroe  === 'string'){
      this.heroeSeleccionado = undefined;
      return ;
    }
    

    
    this.heroeService.getHeroePorId( heroe.id! )
        .subscribe(  heroe => this.heroeSeleccionado = heroe  );    

    this.termino = heroe.superhero;
    
  }

}

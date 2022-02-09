import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 5px; 
      }
    `
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

  heroe : Heroe = {
    superhero : '',
    alter_ego: '',
    characters : '',
    first_appearance : '',
    publisher : Publisher.DCComics,
    alt_img : ''
  }

  constructor(private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    
    
    if(!this.router.url.includes('editar')){
      return;
    }

    this.activatedRoute.params
        .pipe(
          switchMap(
            ({id}) => this.heroeService.getHeroePorId(id)
          )
        )
        .subscribe(
          heroe => this.heroe = heroe
        )

  }

  guardar() {

    if(this.heroe.superhero.trim().length === 0 ){
      return;
    }

    if(this.heroe.id){
      this.heroeService.editarHeroe(this.heroe)
          .subscribe(  heroe => {
            this.mostrarSnackBar('Registro modificado');
          });
    }
    else{
      this.heroeService.agregarHeroe(this.heroe)
      .subscribe(  heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackBar('Registro guardado');
      } );

    }



  }


  borrarHeroe() {


    this.dialog.open(ConfirmarComponent, {
      width: '250px'
    });

    // this.heroeService.borrarHeroe(this.heroe.id !)
    //   .subscribe( resp => {
    //     this.router.navigate(['/heroes'])
    //   });
  }

  mostrarSnackBar(message : string) {

    this._snackBar.open(message, 'ok', {
      duration : 2500
    });

  }

}

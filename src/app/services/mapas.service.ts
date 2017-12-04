import { Injectable } from '@angular/core';
//Import Interface
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];

  constructor() {

    let nuevoMarcador:Marcador = {
      lat: -12.0463731,
      lng: -77.042754,
      draggable: true,
      titulo: "Plaza 2 de Mayo",
    }

    this.marcadores.push( nuevoMarcador );

  }

  insertarMarcador( marcador:Marcador ){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  guardarMarcadores(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  borrarMarcador(idx:number){
    //eliminar 1 marcador de la posicion "idx"
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }

  cargarMarcadores(){
    if( localStorage.getItem('marcadores') ){
      this.marcadores = JSON.parse( localStorage.getItem('marcadores') );
    }else{
      this.marcadores = [];
    }
  }

}

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
  }

}

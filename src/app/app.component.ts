import { Component } from '@angular/core';
//Import Service
import { MapasService } from './services/mapas.service';
//Import interface
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Mi primer AGM proyecto';
  lat: number = -12.0463731;
  lng: number = -77.042754;
  zoom: number = 16;

  marcadorSel:any = null;
  draggable:string = "1";

  constructor( public _ms:MapasService ){
    this._ms.cargarMarcadores();
  }

  clickMapa( evento ){
    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "Sin Titulo",
      draggable: true
    }

    this._ms.insertarMarcador(nuevoMarcador);

  }

  clickMarcador(marcador:Marcador, i:number){
    console.log("clickMarcador: ", marcador, i);
    this.marcadorSel = marcador;
    if(this.marcadorSel.draggable){
      this.draggable = "1";
    }else{
      this.draggable = "0";
    }
  }

  cambiarDraggable(){
    console.log(this.draggable);
    if(this.draggable == "1"){
      this.marcadorSel.draggable = true;
    }else{
      this.marcadorSel.draggable = false;
    }
  }

  dragEndMarcador(marcador:Marcador, evento){
    //console.log(marcador, evento);
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores()
  }

}

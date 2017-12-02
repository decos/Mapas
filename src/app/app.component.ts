import { Component } from '@angular/core';

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
}

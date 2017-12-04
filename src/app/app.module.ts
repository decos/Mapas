import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//Import Angular Google Maps
import { AgmCoreModule } from '@agm/core';

//Import Services
import {MapasService} from './services/mapas.service';

//Import FormsModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiHW_mMSJGbTIlDuZNl8j4LdmZ4y9TuDw'
    }),
    FormsModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

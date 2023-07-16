import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CasosExitoComponent } from './components/casos-exito/casos-exito.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { NavComponent } from './components/globals/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    CasosExitoComponent,
    ContactoComponent,
    PreguntasFrecuentesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

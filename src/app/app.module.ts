import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { NavComponent } from './components/globals/nav/nav.component';
import { AreasComponent } from './components/areas/areas.component';
import { InformaticaComponent } from './components/informatica/informatica.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    PreguntasFrecuentesComponent,
    NavComponent,
    AreasComponent,
    InformaticaComponent,
    CotizarComponent,
    WhatsappBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { PreguntasFrecuentesComponent } from './components/pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { InformaticaComponent } from './components/pages/informatica/informatica.component';
import { CotizarComponent } from './components/pages/cotizar/cotizar.component';
import { AreasComponent } from './components/pages/areas/areas.component';
import { NavComponent } from './components/elements/nav/nav.component';
import { WhatsappBtnComponent } from './components/elements/whatsapp-btn/whatsapp-btn.component';
import { InstagramBtnComponent } from './components/elements/instagram-btn/instagram-btn.component';
import { CarouselComponent } from './components/elements/carousel/carousel.component';
import { AccordionComponent } from './components/elements/accordion/accordion.component';

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
    WhatsappBtnComponent,
    InstagramBtnComponent,
    CarouselComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

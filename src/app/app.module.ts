import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from '@pages/inicio/inicio.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { FaqComponent } from '@pages/faq/faq.component';
import { InformaticaComponent } from '@pages/informatica/informatica.component';
import { AreasComponent } from '@pages/areas/areas.component';
import { NavComponent } from '@elements/nav/nav.component';
import { WhatsappBtnComponent } from '@elements/whatsapp-btn/whatsapp-btn.component';
import { InstagramBtnComponent } from '@elements/instagram-btn/instagram-btn.component';
import { CarouselComponent } from '@elements/carousel/carousel.component';
import { AccordionComponent } from '@elements/accordion/accordion.component';
import { CardTabAreasComponent } from '@elements/card-tab-areas/card-tab-areas.component';
import { EnviarWhatsappComponent } from './components/elements/enviar-whatsapp/enviar-whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactoComponent,
    FaqComponent,
    NavComponent,
    AreasComponent,
    InformaticaComponent,
    WhatsappBtnComponent,
    InstagramBtnComponent,
    CarouselComponent,
    AccordionComponent,
    CardTabAreasComponent,
    EnviarWhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

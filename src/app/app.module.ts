/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { FaqComponent } from '@pages/faq/faq.component';
import { InformaticaComponent } from '@pages/informatica/informatica.component';
import { AreasComponent } from '@pages/areas/areas.component';
import { NavComponent } from '@components/nav/nav.component';
import { WhatsappBtnComponent } from '@components/whatsapp-btn/whatsapp-btn.component';
import { InstagramBtnComponent } from '@components/instagram-btn/instagram-btn.component';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { AccordionComponent } from '@components/accordion/accordion.component';
import { CardTabAreasComponent } from '@components/card-tab-areas/card-tab-areas.component';
import { EnviarWhatsappComponent } from '@components/enviar-whatsapp/enviar-whatsapp.component';
import { AvisoFueraDeHorarioComponent } from '@components/aviso-fuera-de-horario/aviso-fuera-de-horario.component';
import { MensajeUsuarioComponent } from '@components/mensaje-usuario/mensaje-usuario.component';
import { TablaScopeInformaticaComponent } from '@components/tabla-scope-informatica/tabla-scope-informatica.component';
import { FooterComponent } from '@components/footer/footer.component';
import { GlobosComponent } from '@components/globos/globos.component';
import { CustomCardsComponent } from '@components/custom-cards/custom-cards.component';
import { HomeModule } from '@pages/home/home.module';
import { InformaticaModule } from '@pages/informatica/informatica.module';
import { AreasModule } from '@pages/areas/areas.module';
import { ContactoModule } from '@pages/contacto/contacto.module';
import { FaqModule } from '@pages/faq/faq.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    EnviarWhatsappComponent,
    AvisoFueraDeHorarioComponent,
    MensajeUsuarioComponent,
    TablaScopeInformaticaComponent,
    FooterComponent,
    GlobosComponent,
    CustomCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    InformaticaModule,
    AreasModule,
    ContactoModule,
    FaqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } */

//lazy load
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '@components/nav/nav.component';
import { WhatsappBtnComponent } from '@components/whatsapp-btn/whatsapp-btn.component';
import { InstagramBtnComponent } from '@components/instagram-btn/instagram-btn.component';
import { AvisoFueraDeHorarioComponent } from '@components/aviso-fuera-de-horario/aviso-fuera-de-horario.component';
import { MensajeUsuarioComponent } from '@components/mensaje-usuario/mensaje-usuario.component';
import { FooterComponent } from '@components/footer/footer.component';
import { HomeModule } from '@pages/home/home.module';
import { InformaticaModule } from '@pages/informatica/informatica.module';
import { AreasModule } from '@pages/areas/areas.module';
import { ContactoModule } from '@pages/contacto/contacto.module';
import { FaqModule } from '@pages/faq/faq.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WhatsappBtnComponent,
    InstagramBtnComponent,
    AvisoFueraDeHorarioComponent,
    MensajeUsuarioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    InformaticaModule,
    AreasModule,
    ContactoModule,
    FaqModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
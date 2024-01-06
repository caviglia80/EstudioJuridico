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
// import { FaqModule } from '@pages/faq/faq.module';

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
    ContactoModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

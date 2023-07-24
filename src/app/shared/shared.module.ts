import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviarWhatsappComponent } from './components/enviar-whatsapp/enviar-whatsapp.component';

@NgModule({
  declarations: [
    EnviarWhatsappComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnviarWhatsappComponent
  ]
})
export class SharedModule { }
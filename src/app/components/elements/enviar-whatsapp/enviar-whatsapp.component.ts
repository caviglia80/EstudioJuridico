import { Component, ViewChild, ElementRef } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-enviar-whatsapp',
  templateUrl: './enviar-whatsapp.component.html',
  styleUrls: ['./enviar-whatsapp.component.css']
})

export class EnviarWhatsappComponent {
  @ViewChild('textoInput', { static: true }) textoInput!: ElementRef;
  
  enviarTexto(): void {
    const elemento = this.textoInput.nativeElement as HTMLInputElement;
    if (elemento) {
      const url = "https://wa.me/" + environment.whatsapp_1 + "/?text=" + encodeURIComponent(elemento.value);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}

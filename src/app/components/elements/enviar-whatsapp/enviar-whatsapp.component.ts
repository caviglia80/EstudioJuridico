import { Component, ViewChild, ElementRef } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-enviar-whatsapp',
  templateUrl: './enviar-whatsapp.component.html',
  styleUrls: ['./enviar-whatsapp.component.css']
})

export class EnviarWhatsappComponent {
  @ViewChild('textoInput', { static: true }) textoInput!: ElementRef; // Obtener la referencia al input
  
  enviarTexto(): void {
    const elemento = this.textoInput.nativeElement as HTMLInputElement;

    if (elemento) {
      const url = "https://wa.me/" + environment.whatsapp_1 + "/?text=" + encodeURIComponent(elemento.value); // Reemplaza esto con la URL que deseas abrir
      window.open(url, '_blank');
    }
  }
}

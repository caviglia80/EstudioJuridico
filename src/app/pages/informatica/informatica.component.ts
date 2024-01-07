import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';
@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent {
  nuevaConsulta(tema: string): void {
    const url = "https://wa.me/" + GlobalVariables.whatsapp_2 + "/?text=" + encodeURIComponent(GlobalVariables.whatsapp_txt_2 + tema); // Reemplaza esto con la URL que deseas abrir
    window.open(url, '_blank');
  }
}

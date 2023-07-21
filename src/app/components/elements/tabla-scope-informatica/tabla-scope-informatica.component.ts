import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-tabla-scope-informatica',
  templateUrl: './tabla-scope-informatica.component.html',
  styleUrls: ['./tabla-scope-informatica.component.css']
})
export class TablaScopeInformaticaComponent {
  whatsapp: string = environment.whatsapp_2;
  txt: string = environment.whatsapp_txt_2;

  nuevaConsulta(tema: string): void {
    const url = "https://wa.me/" + environment.whatsapp_2 + "/?text=" + encodeURIComponent(this.txt + tema); // Reemplaza esto con la URL que deseas abrir
    window.open(url, '_blank');
  }
}

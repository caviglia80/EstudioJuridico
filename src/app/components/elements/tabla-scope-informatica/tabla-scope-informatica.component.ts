import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-tabla-scope-informatica',
  templateUrl: './tabla-scope-informatica.component.html',
  styleUrls: ['./tabla-scope-informatica.component.css']
})
export class TablaScopeInformaticaComponent {
  whatsapp: string = GlobalVariables.whatsapp_2;
  txt: string = GlobalVariables.whatsapp_txt_2;

  nuevaConsulta(tema: string): void {
    const url = "https://wa.me/" + GlobalVariables.whatsapp_2 + "/?text=" + encodeURIComponent(this.txt + tema); // Reemplaza esto con la URL que deseas abrir
    window.open(url, '_blank');
  }
}

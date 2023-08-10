import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-custom-cards',
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent {

  public enviarTexto(txt: string): void {
    const url = "https://wa.me/" + GlobalVariables.whatsapp_1 + "/?text=" + txt;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

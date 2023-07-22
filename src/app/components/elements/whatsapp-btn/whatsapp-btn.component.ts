import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent {

  redirectToWsp() {
    const webLink = "https://wa.me/" + environment.whatsapp_1 + "/?text=" + encodeURIComponent(environment.whatsapp_txt_1);
    window.open(webLink, '_blank', 'noopener,noreferrer');
  }
}

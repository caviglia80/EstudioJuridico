import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent {
  whatsapp:string = environment.whatsapp_1;
  txt:string = encodeURIComponent(environment.whatsapp_txt_1);
}

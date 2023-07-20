import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent implements OnInit {
  whatsapp:string = environment.whatsapp1;
  txt:string = encodeURIComponent("Buenos dias, quisiera tener mas informacion sobre un tema");
  
  constructor() { }

  ngOnInit(): void {
  }

}

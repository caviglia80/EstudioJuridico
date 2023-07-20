import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent implements OnInit {
  whatsapp = environment.whatsapp1;

  constructor() { }

  ngOnInit(): void {
  }

}

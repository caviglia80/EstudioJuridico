import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() id: any;
  @Input() btnStr: any;
  @Input() body: any;
  public elementId: string;
  public elemento: string;
  public encabezado: string;

  constructor() {
    this.elementId = '';
    this.elemento = '';
    this.encabezado = '';
  }

  ngOnInit(): void {
    this.elementId = '#elemento-' + this.id.toString();
    this.elemento = 'elemento-' + this.id.toString();
    this.encabezado = 'encabezado-' + this.id.toString();
    this.btnStr = this.btnStr ? this.btnStr.toString() : '';
    this.body = this.body ? this.body.toString() : '';
  }

}



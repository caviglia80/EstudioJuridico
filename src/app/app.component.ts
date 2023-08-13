import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EstudioJuridico';
  loaded: boolean = false;
  exitBack: boolean = false;
  exit: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.loaded = true;
      setTimeout(() => {
        this.exitBack = true;
        setTimeout(() => {
          this.exit = true;
        }, 800);
      }, 800);
    }, 250);
  }
}

export class GlobalVariables {
  public static horarioDeInicio_1: number = 9;
  public static horarioDeFin_1: number = 12;
  public static horarioDeInicio_2: number = 16;
  public static horarioDeFin_2: number = 20;
  public static habilitarMostrarHorario: boolean = false;
  public static whatsapp_1: string = '5492364658333';       // LEGAL
  public static whatsapp_txt_1: string = 'Buenos dias, quisiera tener mas informacion sobre un tema legal'; // LEGAL
  public static whatsapp_2: string = '5492364653595';       // INFORMATICA
  public static whatsapp_txt_2: string = 'Buenos dias, tengo interes en saber mas sobre el servicio de desarrollo para '; // INFORMATICA
  public static instagram1: string = 'cavigliayasociados';  // LEGAL
  public static mostrarMensajeUsuario: string = '';
}

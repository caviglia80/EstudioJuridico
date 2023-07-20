import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-aviso-fuera-de-horario',
  templateUrl: './aviso-fuera-de-horario.component.html',
  styleUrls: ['./aviso-fuera-de-horario.component.css']
})

export class AvisoFueraDeHorarioComponent implements OnInit {
  mostrarHorario: boolean = false;
  horarioInicio1: number = environment.horarioDeInicio_1;
  horarioFin1: number = environment.horarioDeFin_1;
  horarioInicio2: number = environment.horarioDeInicio_2;
  horarioFin2: number = environment.horarioDeFin_2;

  constructor() { }

  ngOnInit(): void {
    this.comprobarHorario();
  }

  comprobarHorario(): void {
    const horaActual: number = new Date().getHours();

    if (horaActual >= this.horarioInicio1 && horaActual <= this.horarioFin1 || horaActual >= this.horarioInicio2 && horaActual <= this.horarioFin2) {
      this.mostrarHorario = false;
    } else {
      this.mostrarHorario = environment.habilitarMostrarHorario;
    }
  }

  cerrarToast(): void {
    this.mostrarHorario = false;
  }

}

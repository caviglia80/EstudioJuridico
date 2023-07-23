import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-aviso-fuera-de-horario',
  templateUrl: './aviso-fuera-de-horario.component.html',
  styleUrls: ['./aviso-fuera-de-horario.component.css']
})

export class AvisoFueraDeHorarioComponent implements OnInit {
  mostrarHorario: boolean = false;
  horarioInicio1: number = GlobalVariables.horarioDeInicio_1;
  horarioFin1: number = GlobalVariables.horarioDeFin_1;
  horarioInicio2: number = GlobalVariables.horarioDeInicio_2;
  horarioFin2: number = GlobalVariables.horarioDeFin_2;

  ngOnInit(): void {
    this.comprobarHorario();
  }

  comprobarHorario(): void {
    const horaActual: number = new Date().getHours();

    if (horaActual >= this.horarioInicio1 && horaActual <= this.horarioFin1 || horaActual >= this.horarioInicio2 && horaActual <= this.horarioFin2)
      this.mostrarHorario = false;
    else
      this.mostrarHorario = GlobalVariables.habilitarMostrarHorario;
  }

  cerrarToast(): void {
    this.mostrarHorario = false;
  }

}

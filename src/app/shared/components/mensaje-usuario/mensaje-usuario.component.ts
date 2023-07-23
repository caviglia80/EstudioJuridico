import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-mensaje-usuario',
  templateUrl: './mensaje-usuario.component.html',
  styleUrls: ['./mensaje-usuario.component.css']
})

export class MensajeUsuarioComponent {
  MensajeUsuario: string = GlobalVariables.mostrarMensajeUsuario;

  cerrarToast(): void {
    this.MensajeUsuario = '';
  }
}

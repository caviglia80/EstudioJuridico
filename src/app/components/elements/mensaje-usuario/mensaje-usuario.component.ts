import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-mensaje-usuario',
  templateUrl: './mensaje-usuario.component.html',
  styleUrls: ['./mensaje-usuario.component.css']
})

export class MensajeUsuarioComponent {
  MensajeUsuario: string = environment.mostrarMensajeUsuario;

  cerrarToast(): void {
    this.MensajeUsuario = '';
  }
}

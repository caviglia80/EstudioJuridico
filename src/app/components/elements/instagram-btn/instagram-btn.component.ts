import { Component } from '@angular/core';

@Component({
  selector: 'app-instagram-btn',
  templateUrl: './instagram-btn.component.html',
  styleUrls: ['./instagram-btn.component.css']
})
export class InstagramBtnComponent {
  redirectToInstagram() {
    const appLink = "instagram://user?username=fraancaviglia";
    const webLink = "https://www.instagram.com/fraancaviglia/";

    // Comprobar si la aplicación de Instagram está instalada
    const isAppInstalled = this.isInstagramAppInstalled();

    if (isAppInstalled) {
      window.location.href = appLink;
    } else {
      /* window.location.href = webLink; */
      window.open(webLink, '_blank', 'noopener,noreferrer'); /* para abrir en una nueva pestaña */
    }
  }

  isInstagramAppInstalled(): boolean {
    // Verificar si el navegador admite el esquema de enlace de Instagram
    const isInstagramSupported = window.navigator && window.navigator.userAgent.match(/instagram/i);
    // Verificar si la aplicación de Instagram está instalada en el dispositivo
    const isAppInstalled = window.location.href.startsWith("instagram://");

    return !!(isInstagramSupported && isAppInstalled);
  }
}

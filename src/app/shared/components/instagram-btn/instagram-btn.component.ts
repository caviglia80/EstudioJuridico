import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-instagram-btn',
  templateUrl: './instagram-btn.component.html',
  styleUrls: ['./instagram-btn.component.css']
})
export class InstagramBtnComponent {
  redirectToInstagram() {
    const appLink = "instagram://user?username=" + GlobalVariables.instagram1;
    const webLink = "https://www.instagram.com/" + GlobalVariables.instagram1;

    if (this.isInstagramAppInstalled())
      window.location.href = appLink;
    else
      window.open(webLink, '_blank', 'noopener,noreferrer');
  }

  isInstagramAppInstalled(): boolean {
    // Verificar si el navegador admite el esquema de enlace de Instagram
    const isInstagramSupported = window.navigator && window.navigator.userAgent.match(/instagram/i);
    // Verificar si la aplicación de Instagram está instalada en el dispositivo
    return !!(isInstagramSupported && window.location.href.startsWith("instagram://"));
  }
}
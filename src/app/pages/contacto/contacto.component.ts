import { Component } from '@angular/core';
import { GlobalVariables } from 'src/app/app.component';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {


  redirectToInstagram() {
    const appLink = "instagram://user?username=" + GlobalVariables.instagramEstudioJuridico;
    const webLink = "https://www.instagram.com/" + GlobalVariables.instagramEstudioJuridico;

    if (this.isInstagramAppInstalled())
      window.location.href = appLink;
    else
      window.open(webLink, '_blank', 'noopener,noreferrer');
  }

  isInstagramAppInstalled(): boolean {
    const isInstagramSupported = window.navigator && window.navigator.userAgent.match(/instagram/i);
    return !!(isInstagramSupported && window.location.href.startsWith("instagram://"));
  }
}

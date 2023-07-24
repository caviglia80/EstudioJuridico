import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-instagram-btn',
  templateUrl: './instagram-btn.component.html',
  styleUrls: ['./instagram-btn.component.css']
})
export class InstagramBtnComponent implements OnDestroy {
  private navigationEndSubscription: Subscription;
  public isLegalPage: boolean = true; 

  constructor(private router: Router) {
    this.navigationEndSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.isLegalPage = !event.url.includes('informatica');
    });
  }

  ngOnDestroy() {
    this.navigationEndSubscription.unsubscribe();
  }

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

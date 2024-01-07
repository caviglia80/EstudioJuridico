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

import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalVariables } from 'src/app/app.component';

@Component({
  selector: 'app-whatsapp-btn',
  templateUrl: './whatsapp-btn.component.html',
  styleUrls: ['./whatsapp-btn.component.css']
})
export class WhatsappBtnComponent implements OnDestroy {
  private navigationEndSubscription: Subscription;
  private WspNumber: string = GlobalVariables.whatsapp_1

  constructor(private router: Router) {
    this.navigationEndSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('informatica')) {
          this.WspNumber = GlobalVariables.whatsapp_2;
        } else {
          this.WspNumber = GlobalVariables.whatsapp_1;
        }
      }
    });
  }

  ngOnDestroy() {
    this.navigationEndSubscription.unsubscribe();
  }

  redirectToWsp() {
    const webLink = "https://wa.me/" + this.WspNumber + "/?text=" + encodeURIComponent(GlobalVariables.whatsapp_txt_1);
    window.open(webLink, '_blank', 'noopener,noreferrer');
  }
}

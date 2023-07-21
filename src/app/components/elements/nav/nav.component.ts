import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private elementRef: ElementRef) { }

  toggleMenu(): void {
    const menuElement = this.elementRef.nativeElement.querySelector('#menu');
    menuElement.classList.remove('show');
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    this.toggleMenu();
  }
}

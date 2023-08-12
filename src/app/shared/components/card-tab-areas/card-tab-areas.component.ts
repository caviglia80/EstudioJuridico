import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-card-tab-areas',
  templateUrl: './card-tab-areas.component.html',
  styleUrls: ['./card-tab-areas.component.css']
})
export class CardTabAreasComponent /* implements AfterViewInit */ {
/*   @ViewChild('tabList') tabListRef!: ElementRef;

  ngAfterViewInit(): void {
    const tabList = this.tabListRef.nativeElement as HTMLElement;
    fromEvent(tabList, 'click').pipe(
      map(event => event.target as HTMLElement),
      tap(clickedElement => {
        const element = clickedElement as HTMLElement;
        tabList.appendChild(element);
        return false;
      })
    ).subscribe();
  } */
}

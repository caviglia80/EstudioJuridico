/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GlobosComponent } from '@components/globos/globos.component';
import { CustomCardsComponent } from '@components/custom-cards/custom-cards.component';
import { CarouselComponent } from '@components/carousel/carousel.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    GlobosComponent,
    CarouselComponent,
    CustomCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

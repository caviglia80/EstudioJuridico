import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GlobosComponent } from '@components/globos/globos.component';
import { CustomCardsComponent } from '@components/custom-cards/custom-cards.component';
import { CarouselComponent } from '@components/carousel/carousel.component';
import { ImageRotatorComponent } from '@components/image-rotator/image-rotator.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    GlobosComponent,
    CarouselComponent,
    CustomCardsComponent,
    ImageRotatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }

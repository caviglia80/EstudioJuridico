import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas.component';
import { SharedModule } from '@shared/shared.module';
import { CardTabAreasComponent } from '@components/card-tab-areas/card-tab-areas.component';

const routes: Routes = [
  { path: '', component: AreasComponent }
];

@NgModule({
  declarations: [
    AreasComponent,
    CardTabAreasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AreasModule { }






/* 

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
export class HomeModule { } */
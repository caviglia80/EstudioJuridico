import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './areas.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: AreasComponent }
];

@NgModule({
  declarations: [
    AreasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AreasModule { }

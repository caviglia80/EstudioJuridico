import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto.component';

const routes: Routes = [
  { path: '', component: ContactoComponent }
];

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactoModule { }

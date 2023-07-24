import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InformaticaComponent } from './informatica.component';
import { TablaScopeInformaticaComponent } from '@components/tabla-scope-informatica/tabla-scope-informatica.component';

const routes: Routes = [
  { path: '', component: InformaticaComponent }
];

@NgModule({
  declarations: [
    InformaticaComponent,
    TablaScopeInformaticaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InformaticaModule { }

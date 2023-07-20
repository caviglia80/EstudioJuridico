import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '@pages/inicio/inicio.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { InformaticaComponent } from '@pages/informatica/informatica.component';
import { AreasComponent } from '@pages/areas/areas.component';
import { CotizarComponent } from '@pages/cotizar/cotizar.component';
import { FaqComponent } from '@pages/faq/faq.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'informatica', component: InformaticaComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'cotizar', component: CotizarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, //si no mandan nada, al inicio
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } //si mandan fruta lleva al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InformaticaComponent } from './components/informatica/informatica.component';
import { AreasComponent } from './components/areas/areas.component';
import { CotizarComponent } from './components/cotizar/cotizar.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
/* import { NavComponent } from './components/globals/nav/nav.component';
 */
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'informatica', component: InformaticaComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'cotizar', component: CotizarComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, //si no mandan nada, al inicio
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } //si mandan fruta lleva al inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

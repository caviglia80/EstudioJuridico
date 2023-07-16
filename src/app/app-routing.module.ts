import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CasosExitoComponent } from './components/casos-exito/casos-exito.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { NavComponent } from './components/globals/nav/nav.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'casos-exito', component: CasosExitoComponent },
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

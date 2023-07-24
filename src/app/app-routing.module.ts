import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* 
import { HomeComponent } from '@pages/home/home.component';
import { ContactoComponent } from '@pages/contacto/contacto.component';
import { InformaticaComponent } from '@pages/informatica/informatica.component';
import { AreasComponent } from '@pages/areas/areas.component';
import { FaqComponent } from '@pages/faq/faq.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'informatica', component: InformaticaComponent },
  { path: 'areas', component: AreasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
]; */

// lazy loading
const routes: Routes = [
  { path: 'home', loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule) },
  { path: 'informatica', loadChildren: () => import('@pages/informatica/informatica.module').then(m => m.InformaticaModule) },
  { path: 'areas', loadChildren: () => import('@pages/areas/areas.module').then(m => m.AreasModule) },
  { path: 'contacto', loadChildren: () => import('@pages/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'faq', loadChildren: () => import('@pages/faq/faq.module').then(m => m.FaqModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

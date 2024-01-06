import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule) },
  { path: 'informatica', loadChildren: () => import('@pages/informatica/informatica.module').then(m => m.InformaticaModule) },
  { path: 'areas', loadChildren: () => import('@pages/areas/areas.module').then(m => m.AreasModule) },
  { path: 'contacto', loadChildren: () => import('@pages/contacto/contacto.module').then(m => m.ContactoModule) },
  // { path: 'faq', loadChildren: () => import('@pages/faq/faq.module').then(m => m.FaqModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

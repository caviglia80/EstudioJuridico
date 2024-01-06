import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from '@pages/faq/faq.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  { path: '', component: FaqComponent }
];

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class FaqModule { }

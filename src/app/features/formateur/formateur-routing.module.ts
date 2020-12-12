import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormateurComponent } from './formateur.component';

const routes: Routes = [{ path: '', component: FormateurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }

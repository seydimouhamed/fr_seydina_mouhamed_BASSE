import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApprenantComponent } from './apprenant.component';

const routes: Routes = [{ path: '', component: ApprenantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprenantRoutingModule { }

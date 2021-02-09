import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeComponent } from './ge.component';

const routes: Routes = [{ path: '', component: GeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeRoutingModule { }

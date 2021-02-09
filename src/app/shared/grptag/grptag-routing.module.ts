import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrptagComponent } from './grptag.component';

const routes: Routes = [{ path: '', component: GrptagComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrptagRoutingModule { }

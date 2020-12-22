import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CmComponent } from './cm.component';

const routes: Routes = [{ path: '', component: CmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }

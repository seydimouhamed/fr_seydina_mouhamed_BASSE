import { ReferentielResolveService } from './refrentiel-resolve.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReferentielComponent} from './referentiel.component';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {DetailComponent} from '../grp-competence/detail/detail.component';

const routes: Routes = [{path: '', component: ReferentielComponent, children: [
    {path: '' , component: ListComponent, resolve: { referentiels : ReferentielResolveService} },
    {path: 'add' , component: AddComponent},
    {path: 'details/:id' , component: DetailComponent },
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferentielRoutingModule { }

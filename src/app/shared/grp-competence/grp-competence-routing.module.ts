import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrpCompenceComponent } from './grp-compence.component';
import { GrpCompetenceResolverService } from './grp-competence-resolver.service';

const routes: Routes = [
  { path: '', component: GrpCompenceComponent, children: [
    {path: 'add', component: AddComponent},
    {path: 'details/:id', component: DetailComponent, resolve: { grpCompetence: GrpCompetenceResolverService}},
    {path: 'list', component: ListComponent},
    {path: '', component: ListComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrpCompetenceRoutingModule { }

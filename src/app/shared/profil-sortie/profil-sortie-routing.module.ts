import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilSortieComponent } from './profil-sortie.component';

const routes: Routes = [
  { path: '', component: ProfilSortieComponent, children: [
    {path: '', component: ListComponent},
    {path: 'details/:id', component: DetailsComponent},
    {path: 'add', component: AddComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilSortieRoutingModule { }

import { UserResolveService } from './../../../shared/user/user-resolver.service';
import { DetailsComponent } from './../../../shared/user/details/details.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProfilUserComponent } from './list-profil-user/list-profil-user.component';


const routes: Routes = [
  { path: '', component: GestionUtilisateurComponent, children: [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'details/:id', component: DetailsComponent, resolve: {user: UserResolveService}},
    { path: 'list', component: ListProfilUserComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUtilisateurRoutingModule { }

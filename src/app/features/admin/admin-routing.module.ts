
import { AdminComponent } from './admin.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: AdminComponent, children: [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
  { path: 'users', loadChildren: () => import('./gestion-utilisateur/gestion-utilisateur.module').then(m => m.GestionUtilisateurModule) },
  { path: 'profilsortie', loadChildren: () => import('src/app/shared/profil-sortie/profil-sortie.module').then(f => f.ProfilSortieModule) },
  { path: 'grpCompetence',
  loadChildren: () => import('src/app/shared/grp-competence/grp-competence.module').then(r => r.GrpCompetenceModule)
  },
  { path: 'referentiel',
  loadChildren: () => import('src/app/shared/referentiel/referentiel.module').then(r => r.ReferentielModule)
  },
  { path: 'competence',
  loadChildren: () => import('src/app/shared/competence/competence.module').then(r => r.CompetenceModule)
  },
  { path: 'promo',
  loadChildren: () => import('src/app/shared/promo/promo.module').then(r => r.PromoModule)
  },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

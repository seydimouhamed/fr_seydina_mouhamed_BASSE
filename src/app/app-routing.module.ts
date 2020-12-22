import { CmGard } from './_helper/_gards/cm.guard';
import { FormateurGard } from './_helper/_gards/formateur.guard';
import { ApprenantGard } from './_helper/_gards/apprenant.guard';
import { AdminGard } from './_helper/_gards/admin.guard';
import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)},
  {path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'admin',
  loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  canActivate: [AdminGard]
},
  { path: 'apprenant',
  loadChildren: () => import('./features/apprenant/apprenant.module').then(m => m.ApprenantModule),
  canActivate: [ApprenantGard]
 },
  { path: 'formateur',
  loadChildren: () => import('./features/formateur/formateur.module').then(m => m.FormateurModule),
  canActivate: [FormateurGard]
},
  { path: 'cm', loadChildren: () => import('./features/cm/cm.module').then(m => m.CmModule), canActivate: [CmGard] },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

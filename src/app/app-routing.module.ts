import { ErrorComponent } from './error/error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  {path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: 'apprenant', loadChildren: () => import('./features/apprenant/apprenant.module').then(m => m.ApprenantModule) },
  { path: 'formateur', loadChildren: () => import('./features/formateur/formateur.module').then(m => m.FormateurModule) },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

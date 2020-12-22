import { MaterialModule } from 'src/app/material.module';
import { PresentationModule } from './../../shared/presentation/presentation.module';
import { UserModule } from './../../shared/user/user.module';
import { ProfilModule } from './../../shared/profil/profil.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GestionUtilisateurComponent } from './gestion-utilisateur/gestion-utilisateur.component';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, GestionUtilisateurComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProfilModule,
    UserModule,
    FlexLayoutModule,
    PresentationModule,
    MaterialModule
  ]
})
export class AdminModule { }

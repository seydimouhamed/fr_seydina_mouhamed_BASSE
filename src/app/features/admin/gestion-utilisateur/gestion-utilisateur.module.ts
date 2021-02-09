import { MaterialModule } from './../../../material.module';
import { GestionUtilisateurComponent } from './gestion-utilisateur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUtilisateurRoutingModule } from './gestion-utilisateur-routing.module';
import {ProfilModule} from '../../../shared/profil/profil.module';
import {UserModule} from '../../../shared/user/user.module';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListProfilUserComponent } from './list-profil-user/list-profil-user.component';


@NgModule({
  declarations: [GestionUtilisateurComponent, ListProfilUserComponent],
    imports: [
        CommonModule,
        GestionUtilisateurRoutingModule,
        ProfilModule,
        UserModule,
        MatIconModule,
        FlexModule,
        MatFormFieldModule,
        MaterialModule
    ]
})
export class GestionUtilisateurModule { }

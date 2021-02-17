import { InlineEditModule } from './../inline-edit/inline-edit.module';
import {  RouterModule } from '@angular/router';
import { DndapprenantModule } from './../dndapprenant/dndapprenant.module';
import { ProfilSortieRoutingModule } from './profil-sortie-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilSortieComponent } from './profil-sortie.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './list/item/item.component';
import { AddComponent } from './add/add.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DirectiveModule} from '../../@directive/directive.module';
import {MatTableModule} from '@angular/material/table';
import {UserModule} from '../user/user.module';
import { ListPsUserComponent } from './list-ps-user/list-ps-user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ProfilSortieComponent, ListComponent, DetailsComponent, ItemComponent, AddComponent, ListPsUserComponent],
  imports: [
    // importe dragnrop module
    DndapprenantModule,
    // import dnd module
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatIconModule,
    MatStepperModule,
    FlexModule,
    ProfilSortieRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    DirectiveModule,
    MatTableModule,
    UserModule,
    MatPaginatorModule,
    MatButtonModule,
    ReactiveFormsModule,
    InlineEditModule
  ],
})
export class ProfilSortieModule { }

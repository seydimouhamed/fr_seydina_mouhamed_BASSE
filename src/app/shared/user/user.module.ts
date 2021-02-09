import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';

import { DirectiveModule } from './../../@directive/directive.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, DetailsComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    RouterModule
  ],
  exports: [
    ListUserComponent,
    CreateUserComponent,
    FormsModule,
    DetailsComponent
  ]
})
export class UserModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {ShadowOverDirective} from '../../@directive/shadow-over.directive';



@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, ShadowOverDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListUserComponent,
    CreateUserComponent,
    FormsModule
  ]
})
export class UserModule { }

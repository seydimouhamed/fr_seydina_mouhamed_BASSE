import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { UpdatePasswordComponent } from './update-password/update-password.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, UpdatePasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AuthRoutingModule,
    // MatButtonModule,
    // MatCheckboxModule,
    // MatInputModule,
    // MatMenuModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatTableModule,
    // MatDialogModule,
    // MatDatepickerModule,
    // MatSelectModule,
    // MatCardModule,
    // MatFormFieldModule,
    FormsModule

  ]
})
export class AuthModule { }

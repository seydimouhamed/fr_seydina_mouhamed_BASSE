import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { CreatetProfilComponent } from './createt-profil/createt-profil.component';



@NgModule({
  declarations: [ListProfilComponent, CreatetProfilComponent],
  imports: [
    CommonModule
  ],
  exports: [ListProfilComponent, CreatetProfilComponent]
})
export class ProfilModule { }

import { NgModule } from '@angular/core';

import {MatCardModule,} from '@angular/material/card';
import { MatInputModule,} from '@angular/material/input';
import {  MatButtonModule,} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';



const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,

  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatMenuModule,
 // FlexLayoutModule,
  MatListModule,
  MatTableModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}

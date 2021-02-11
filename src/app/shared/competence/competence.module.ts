import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetenceRoutingModule } from './competence-routing.module';
import { CompetenceComponent } from './competence.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { ItemComponent } from './list/item/item.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [CompetenceComponent, ListComponent, DetailsComponent, AddComponent, ItemComponent],
  imports: [
    CommonModule,
    CompetenceRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    RouterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTabsModule,
    RouterModule,

    HttpClientModule
  ]
})
export class CompetenceModule { }

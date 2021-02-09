import { HttpClientModule } from '@angular/common/http';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { GrpCompetenceRoutingModule } from './grp-competence-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrpCompenceComponent } from './grp-compence.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatOptionModule} from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [GrpCompenceComponent, ListComponent, ItemComponent, DetailComponent, AddComponent, ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    RouterModule,
    GrpCompetenceRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatPaginatorModule,
    MatOptionModule,
    MatChipsModule,
    MatBadgeModule,
    MatExpansionModule,
    HttpClientModule
  ]
})
export class GrpCompetenceModule { }

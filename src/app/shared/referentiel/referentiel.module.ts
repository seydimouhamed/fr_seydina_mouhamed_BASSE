import { MatExpansionModule } from '@angular/material/expansion';
import { DndModule } from './../dnd/dnd.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../../material.module';
import { ReferentielComponent } from './referentiel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferentielRoutingModule } from './referentiel-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxMatFileInputModule} from '@angular-material-components/file-input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [ReferentielComponent, ListComponent, ItemComponent, AddComponent, DetailsComponent],
  imports: [
    CommonModule,
    ReferentielRoutingModule,
    HttpClientModule,

    DndModule,

    MatFormFieldModule,
    MatIconModule,
    FlexModule,
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    // NgxMatFileInputModule,
    FormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MaterialModule,
    MatExpansionModule
  ]
})
export class ReferentielModule { }

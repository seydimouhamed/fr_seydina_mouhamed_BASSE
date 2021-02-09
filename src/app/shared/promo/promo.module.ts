import { MatStepperModule } from '@angular/material/stepper';
import { ApprenantpromoComponent } from './apprenantpromo/apprenantpromo.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoRoutingModule } from './promo-routing.module';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { PromoComponent } from './promo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {DndModule} from '../dnd/dnd.module';



@NgModule({
  declarations: [ListComponent, ItemComponent, AddComponent, DetailsComponent, PromoComponent, ApprenantpromoComponent],
    imports: [
        CommonModule,
        PromoRoutingModule,
        MatFormFieldModule,
        MatButtonModule,
        MatNativeDateModule,
        MatDatepickerModule,
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
        MatSelectModule,
        MatOptionModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatChipsModule,
        DndModule,
        MatStepperModule
    ]
})
export class PromoModule { }

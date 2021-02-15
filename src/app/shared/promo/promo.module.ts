import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent, StatApprenantComponent } from './details/stat-apprenant/stat-apprenant.component';
import { SummaryComponent } from './details/summary/summary.component';
import { MaterialModule } from './../../material.module';
import { DirectiveModule } from './../../@directive/directive.module';
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
import { ListApprenantComponent } from './details/list-apprenant/list-apprenant.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';




@NgModule({
  declarations: [ListComponent, ItemComponent,
    AddComponent, DetailsComponent, PromoComponent,
    ApprenantpromoComponent, ListApprenantComponent, SummaryComponent, ListApprenantComponent,
    StatApprenantComponent, CarteComponent],
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
        MatListModule,
        DndModule,
        MatStepperModule,
        DirectiveModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        NgxQRCodeModule
    ]
})
export class PromoModule { }

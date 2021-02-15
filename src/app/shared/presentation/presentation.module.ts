import { RouterModule } from '@angular/router';
import { AllItemComponent } from './allItem/allItem.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  PresentationRoutingModule } from './presentation-routing.module';



@NgModule({
  declarations: [PresentationComponent, ItemComponent, AllItemComponent, DetailsComponent],
  imports: [
    PresentationRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [PresentationComponent]
})
export class PresentationModule { }

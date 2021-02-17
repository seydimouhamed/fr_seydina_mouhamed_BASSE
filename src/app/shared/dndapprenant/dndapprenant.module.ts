import { MaterialModule } from './../../material.module';
import {  } from '@angular/cdk';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndapprenantComponent } from './dndapprenant.component';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [DndapprenantComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MaterialModule
  ],
  exports: [
    DndapprenantComponent
  ]
})
export class DndapprenantModule { }

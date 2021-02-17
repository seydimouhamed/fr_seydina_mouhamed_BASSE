import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineEditComponent } from './inline-edit.component';



@NgModule({
  declarations: [InlineEditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InlineEditComponent
  ]
})
export class InlineEditModule { }

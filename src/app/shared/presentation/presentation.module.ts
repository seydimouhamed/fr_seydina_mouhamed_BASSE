import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [PresentationComponent]
})
export class PresentationModule { }

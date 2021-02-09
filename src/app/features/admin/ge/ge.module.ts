import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeRoutingModule } from './ge-routing.module';
import { GeComponent } from './ge.component';


@NgModule({
  declarations: [GeComponent],
  imports: [
    CommonModule,
    GeRoutingModule
  ]
})
export class GeModule { }

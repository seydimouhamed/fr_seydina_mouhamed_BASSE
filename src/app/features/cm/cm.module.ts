import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { CmComponent } from './cm.component';


@NgModule({
  declarations: [CmComponent],
  imports: [
    CommonModule,
    CmRoutingModule
  ]
})
export class CmModule { }

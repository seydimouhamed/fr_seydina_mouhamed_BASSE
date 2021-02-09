import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrptagRoutingModule } from './grptag-routing.module';
import { GrptagComponent } from './grptag.component';


@NgModule({
  declarations: [GrptagComponent],
  imports: [
    CommonModule,
    GrptagRoutingModule,
    HttpClientModule
  ]
})
export class GrptagModule { }

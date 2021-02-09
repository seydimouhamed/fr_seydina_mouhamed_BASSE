import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndComponent } from './dnd.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [DndComponent],
    imports: [
        CommonModule,
        MatIconModule,
        FlexLayoutModule
    ],
  exports: [
    DndComponent
  ]
})
export class DndModule {

}

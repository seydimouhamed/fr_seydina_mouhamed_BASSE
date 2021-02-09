import { ShadowOverDirective } from './shadow-over.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DndDirective } from './dnd.directive';
import { ComponentActionDirective } from './component-action.directive';



@NgModule({
  declarations: [ShadowOverDirective, DndDirective, ComponentActionDirective],
  imports: [
    CommonModule
  ],
  exports: [ShadowOverDirective, ComponentActionDirective]
})
export class DirectiveModule { }

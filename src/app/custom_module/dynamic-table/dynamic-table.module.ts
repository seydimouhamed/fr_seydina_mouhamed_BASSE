import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DynamicColumnComponent } from './dynamic-column.component';



@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [DynamicColumnComponent, DynamicTableComponent]
})
export class DynamicTableModule { }

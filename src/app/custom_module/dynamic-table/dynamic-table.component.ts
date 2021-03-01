import {
  AfterContentInit, Component, ContentChild,
  ContentChildren, EventEmitter, Input,
  OnChanges, OnInit, ViewChildren,
  Output, QueryList, ViewChild
} from '@angular/core';
import {
  MatColumnDef, MatHeaderRowDef,
  MatRowDef, MatTable,
 MatTableDataSource
} from '@angular/material/table';
import { MatSort, MatSortable,
  MatSortHeader
} from '@angular/material/sort';
import {
   MatPaginator
} from '@angular/material/paginator';

import { DynamicColumnComponent } from './dynamic-column.component';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  // styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent<T> implements OnChanges, AfterContentInit {


  @ContentChildren(DynamicColumnComponent) dynColumns: QueryList<DynamicColumnComponent<T>>;
  @ContentChildren(MatColumnDef) columnDefs: QueryList<MatColumnDef>;

  @ContentChild(MatHeaderRowDef) headerRowDef: MatHeaderRowDef;
  @ContentChildren(MatRowDef) rowDefs: QueryList<MatRowDef<T>>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ContentChild(MatSort) sort: MatSort;

  @ViewChild(MatTable) table: MatTable<T>;

  @Input() displayedColumns: any;
  @Input() data: any;

  public dataSource = new MatTableDataSource([]);
  constructor() { }

  ngOnChanges(): void {
    if (this.data) {
      this.setData(this.data);
    }
  }

  ngAfterContentInit(): void {
    this.dynColumns.forEach(
      dynColumn => this.table.addColumnDef(dynColumn.columnDef)
      );
    this.columnDefs.forEach(
      columnDef => this.table.addColumnDef(columnDef)
    );
  }

  setData(data): void{
    if (Array.isArray(data)) {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}

import { User } from './../../../../models/User';
import { MatTableDataSource } from '@angular/material/table';
import { ProfilService } from './../../../profil/profil.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Profil } from './../../../../models/Profil';
import { Component, Input, OnInit, SimpleChanges, OnChanges, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '@shared/user/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.scss']
})
export class ListApprenantComponent implements OnInit, OnChanges, AfterViewInit {
@Input() users: User[];
@Output() newUser = new EventEmitter();
  error = '';
  editable = false;


  displayedColumns: string[] = [ 'avatar', 'email', 'id'];
  dataSource: any;
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes): void {

    if (changes.users){
      console.log(this.users);
      this.dataSource = new MatTableDataSource<User>(this.users);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  displayDetails(row): void{
    this.newUser.emit(row);
  }



  toInput(id): void{
    this.editable = true;
  }


  onBlurInput(id): void {
    this.editable = false;
    alert('blur');
  }


  sendMessage(): void
  {

  }

}

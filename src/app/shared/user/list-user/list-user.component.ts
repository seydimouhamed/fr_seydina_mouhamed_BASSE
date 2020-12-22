import { ProfilService } from './../../profil/profil.service';
import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/User';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[];
  error = '';
  editable = false;
  nombreItemPage = 5;
  nbrItems: number;
  pageIndex = 0;
  currentProfil = '';

//  @Input() profilUser: string;

  profilUser = '';

  pageEvent: PageEvent;

  displayedColumns: string[] = ['select', 'id', 'firstname', 'lastname', 'email', 'profil'];
  dataSource: any;
  selection = new SelectionModel<User>(true, []);


  constructor(
    private userService: UserService,
    private profilService: ProfilService
    ) {
    }

  ngOnInit(): void {
   this.profilService.currentProfilSubject.subscribe( profil =>
    {
      this.profilUser = profil;
      this.getUsers();
   });
  }

  changeThing(event): void{
    this.nombreItemPage = event.pageSize;
    this.pageIndex = event.pageIndex + 1;
   // alert(event);
    this.updateUsers();
  }

  updateUsers(): void{
    // page = 1, nbrItemPage = 5, profil= 'CM'
    this.userService.getUsers(this.pageIndex, this.nombreItemPage, this.currentProfil)
        .subscribe(
          users => {
            this.users = users['hydra:member'];
            this.dataSource = new MatTableDataSource<User>(this.users);
          }
        );
  }

  getUsers(): void
  {
    // this.userService.getUsers( 1, 5,'APPRENANT')
    if ( this.profilUser){
      this.currentProfil = this.profilUser ;
    }
    this.userService.getUsers(1, 5 , this.currentProfil)
            .subscribe(
              users => {
                this.users = users['hydra:member'];
                this.nbrItems = users['hydra:totalItems'];
                this.dataSource = new MatTableDataSource<User>(this.users);
               // console.log(users);
            },
              error => { this.error = error; }
              );
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): any {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}

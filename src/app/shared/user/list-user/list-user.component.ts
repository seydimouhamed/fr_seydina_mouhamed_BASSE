import { Router } from '@angular/router';
import { ProfilService } from './../../profil/profil.service';
import { Observable } from 'rxjs';
import { UserService } from './../user.service';
import { Component, Input, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/User';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
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
  userOver = false;


//  @Input() profilUser: string;

  profilUser = '';

  pageEvent: PageEvent;

  displayedColumns: string[] = ['select', 'id', 'firstname', 'lastname', 'email', 'profil'];
  dataSource: any;
  selection = new SelectionModel<User>(true, []);


  constructor(
    private userService: UserService,
    private profilService: ProfilService,
    private router: Router
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

  detailUser(id){
    this.router.navigate(['admin/users/details', id]);
   // alert(id);
  }
  // --------------//
  // deleting user //
  // --------------//
  deleteUser(element): void {

   // return;
    Swal.fire({
      title: 'Vous etes sur de vouloir supprimer',
      text: '(l\'utilisateur sera archiver)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cconfirmer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        this.userService.delete(element.id).subscribe(
          data => {
            this.dataSource.data.splice(this.users.indexOf(element), 1);
            this.dataSource._updateChangeSubscription();
            // Swal.fire(
            //   'Suppimé avec succes!',
            //   'l\'utilisateur a été archivé avec succès!',
            //   'success'
            // );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });

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
  setUserOver(): void {

    this.userOver ? this.userOver = false : this.userOver = true;
   // console.log(this.userOver);
  }
}

import { Router } from '@angular/router';
import { ProfilSortie } from './../profil-sortie';
import { UserService } from './../../user/user.service';
import { User } from 'src/app/models/User';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { PageEvent } from '@angular/material/paginator';
import { ProfilSortieService } from '../profil-sortie.service';

@Component({
  selector: 'app-list-ps-user',
  templateUrl: './list-ps-user.component.html',
  styleUrls: ['./list-ps-user.component.scss']
})
export class ListPsUserComponent implements OnInit {

  users: User[];
  error = '';
  editable = false;
  nombreItemPage = 20;
  nbrItems: number;
  pageIndex = 1;
  idCurrentPs = 2;

//  @Input() profilUser: string;

  profilUser = '';

  pageEvent: PageEvent;

  displayedColumns: string[] = ['avatar', 'nom', 'email', 'telephone'];
  dataSource: any;
  selection = new SelectionModel<User>(true, []);


  constructor(
    private userService: UserService,
    private psService: ProfilSortieService,
    private router: Router
    ) {
    }

  ngOnInit(): void {
   // this.getUsers();
   this.psService.currentPsSubject.subscribe( idPs =>
    {
      this.idCurrentPs = idPs;
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

    this.psService.getUsers(this.idCurrentPs,this.pageIndex, this.nombreItemPage)
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

  getUsers(): void
  {
    // this.userService.getUsers( 1, 5,'APPRENANT')
    if (  !this.idCurrentPs){
      return ;
    }
    this.psService.getUsers(this.idCurrentPs)
            .subscribe(
              users => {
                this.users = users['hydra:member'];
                this.nbrItems = users['hydra:totalItems'];
                this.dataSource = new MatTableDataSource<User>(this.users);
                console.log(users);
            },
              error => { this.error = error; }
              );
  }



}

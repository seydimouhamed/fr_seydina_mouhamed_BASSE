import { Promo } from 'src/app/models/Promo';
import { ActivatedRoute, Data } from '@angular/router';
import { Apprenant } from './../../../models/Apprenant';
import { User } from './../../../models/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
users: Apprenant[];
promo: Promo;
  constructor(
    private userService: UserService,
    private router: ActivatedRoute) { }
currentUser: Apprenant;
  ngOnInit(): void {
    this.router.data.subscribe(
      (data: Data) =>
      {
        const promoData = data['promoprinc']['hydra:member'][0];
        this.promo = promoData;
        this.users = data['promoprinc']['hydra:member'][0]['groupes'][0]['apprenants'];
       // this.currentUser = data['promoprinc']['hydra:member'][0]['groupes'][0]['apprenants'][5];
      }
    );
   // this.getUsers();
  }
 getCurrentUser(event): void {
   this.currentUser = event as Apprenant;
 }
  getUsers(): void
  {
       this.userService.getUsers()
            .subscribe(
              users => {
                this.users = users['hydra:member']['groupes'][0]['apprenants'];
                this.currentUser = users['hydra:member']['groupes'][0]['apprenants'][0];
            },
              error => { console.log(error); }
              );
  }
}

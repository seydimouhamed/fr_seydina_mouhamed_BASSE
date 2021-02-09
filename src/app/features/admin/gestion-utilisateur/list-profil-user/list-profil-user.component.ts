import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profil-user',
  templateUrl: './list-profil-user.component.html',
  styleUrls: ['./list-profil-user.component.scss']
})
export class ListProfilUserComponent implements OnInit {

  displayUsers = true;
  currentProfil = '';
  constructor(private authService: AuthService) {
    this.currentProfil = this.authService.getCurrentRole();
   }


  ngOnInit() {
  }

  createUserEvent(): void
  {
   this.displayUsers = !this.displayUsers;
  }
}

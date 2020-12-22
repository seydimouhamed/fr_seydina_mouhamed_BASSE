import { AuthService } from 'src/app/features/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent implements OnInit {
  displayUsers = true;
  currentProfil = '';
  constructor(private authService: AuthService) {
    this.currentProfil = this.authService.getCurrentRole();
   }

  ngOnInit(): void {
  }
 createUserEvent(): void
 {
  this.displayUsers = !this.displayUsers;
 }
}

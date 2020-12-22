import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';
import { getType } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mode = 'side';
  minimalSide = true;
  showDetails = false;
  fixDetails = false;
  isAuth = false;
  currentProfil = '';
    constructor(private authService: AuthService, private router: Router) {

      this.authService.currentUser.subscribe(
        (user: User) => {
         // console.log(user.token+""+"sdksq");
          if ( !user ){
           // console.log(user);
            this.isAuth = false;
          }else
          {
            this.isAuth = true;
            this.currentProfil = this.authService.getCurrentRole();
          }
        }
      );
    }
    ngOnInit(): void {
    }

    showDetail(): void{
      this.showDetails = true;
    }
    closeDetail(): void{
     if (!this.fixDetails)
     {
      this.showDetails = false;
     }
    }

    fixeSideNav(): void{
      this.fixDetails = !this.fixDetails;
    }
    logout(): void
    {
        if (this.authService.logout() )
        {
          this.router.navigate(['/auth']);
        }
    }
}

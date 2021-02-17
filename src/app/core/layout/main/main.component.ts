import { User } from 'src/app/models/User';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';
import { getType } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { navigation } from 'src/app/config/navigation.service';
import { OverlayContainer } from '@angular/cdk/overlay';

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

  navigation$ = navigation;
  // theming
  themeColor: 'primary' | 'accent' | 'warn' = 'primary'; // ? notice this
  isDark = false;

    constructor(
      private authService: AuthService,
      private router: Router,
      private overlayContainer: OverlayContainer) {

      this.authService.currentUser.subscribe(
        (user: User) => {
         // console.log(user.token+""+"sdksq");
          if ( !user ){
            this.isAuth = false;
          }else
          {
            this.isAuth = true;
            this.currentProfil = this.authService.getCurrentRole();
            //
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

    toggleTheme(): void {
      this.isDark = !this.isDark;
      if (this.isDark) {
        // alert("dark");
        this.overlayContainer.getContainerElement().classList.add('dark-theme');
      } else {
        this.overlayContainer
          .getContainerElement()
          .classList.remove('dark-theme');
      }
    }
}

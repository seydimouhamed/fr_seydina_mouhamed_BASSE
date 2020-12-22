import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class CmGard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      const currentUser =  this.authenticationService.getCurrentUserTokenInfo();
      if ( currentUser && currentUser['roles']) {

        if (currentUser['roles'][0] === 'ROLE_CM'){
          return true;
        }
        return false;
      }

        this.router.navigate(['/auth'], {queryParams: { returnUrl: state.url }});
        return false;
    }
}

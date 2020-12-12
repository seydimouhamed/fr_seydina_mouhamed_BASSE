import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';

@Injectable({ providedIn: 'root'})
export class AuthGard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser =  this.authenticationService.currentUserValue;
        if ( currentUser ) {
             return true;
        }

        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
        return false;
    }
}
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../features/auth/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor( private authenticationService: AuthService ) {}
    intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentUser = this.authenticationService.currentUserValue;

        if ( currentUser && currentUser.token ) {
            request = request.clone({
                setHeaders: {
                    Authorization : `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}

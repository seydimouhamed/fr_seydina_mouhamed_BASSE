import { AuthService } from '../features/auth/auth.service';

export function appInitializer( authenticationService: AuthService): any {
    return () => new Promise(resolve => {

        if (!localStorage.getItem('currentUser'))
        {
          return false;
        }
        authenticationService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}

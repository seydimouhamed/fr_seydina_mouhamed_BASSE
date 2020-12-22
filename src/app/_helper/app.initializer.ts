import { AuthService } from '../features/auth/auth.service';

export function appInitializer( authenticationService: AuthService): any {
    return () => new Promise(resolve => {
        authenticationService.refreshToken()
            .subscribe()
            .add(resolve);
    });
}

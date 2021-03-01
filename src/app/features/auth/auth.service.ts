import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  tokenInfo: any;
  private currentRole = '';

  apiUrl = environment.apiUrl;
  // ------JwtHelperService------ //
    private helper = new JwtHelperService();


  TOKEN = 'token';
  infoUser: User;
  private refreshTokenTimeout;

  constructor(
    private http: HttpClient,
    private route: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

   getCurrentRole(): string
   {
     const role = this.getTokenfromLocal()['role'];
     return ((role.split('_'))[1]).toLowerCase();
   }
   getTokenfromLocal(): any
   {
     return JSON.parse(localStorage.getItem('currentUser'));
   }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): any{
    return this.http.post<any>(`${this.apiUrl}login`, { username, password })
            .pipe(map(token => {
              localStorage.setItem('currentUser', JSON.stringify(token));
              localStorage.setItem('refreshToken', token.refresh_token);
              this.tokenInfo = this.getInfoToken(token.token);
              localStorage.setItem('currentUserInfo', JSON.stringify(this.tokenInfo));

              // console.log(this.getTokenExpiratinDate());
              this.currentUserSubject.next(token);
              this.startRefreshTokenTimer();
             // this.refreshToken().subscribe();
              return true;
            })
    );
  }

  public getCurrentUserTokenInfo(): any{
   return JSON.parse(localStorage.getItem('currentUserInfo'));
  }

  public setCurrentUserValue(user: User): void{
    user.token = this.currentUserValue.token;
    this.currentUserSubject.next(user);
  }

  logout(): boolean{
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserInfo');
    this.stopRefreshTokenTimer();
    this.currentUserSubject.next(null);
    return true;
  }

  getInfoToken(token: string): any{
    try{
      return this.helper.decodeToken(token);
    }
    catch ( Error)
    {
      return null;
    }
  }

  isAuthenticated(): boolean {
      if ( this.currentUser ) {
          return true;
      } else {
          return false;
      }
  }
 getUser(): any
 {
   return this.http.get<User>(`${this.apiUrl}admin/user`);
 }

  getTokenExpiratinDate(): Date{
    if ( this.tokenInfo.exp === undefined){
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(this.tokenInfo.exp);
    return date;
  }

  refreshToken(): any {
      console.log('token rafressing');
      const refreshToken = JSON.parse(localStorage.getItem('currentUser'))['refresh_token'];
     // alert(refreshToken);
      return this.http.post<any>(`${environment.apiUrl}token/refresh`,
      { 'refresh_token': refreshToken })
          .pipe(map((user) => {
            // alert('retour serveur')
            // console.log(user['token']);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserValue.token = user['token'];
            const jwtToken = JSON.parse(atob(this.currentUserValue.token.split('.')[1]));
            console.log(jwtToken);
              // this.currentUserSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
          }));
  }

  private startRefreshTokenTimer(): void {
      // parse json object from base64 encoded jwt token
      const jwtToken = JSON.parse(atob(this.currentUserValue.token.split('.')[1]));

      // set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
     // const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer(): void {
      clearTimeout(this.refreshTokenTimeout);
  }

  gotoHome(): void{
    this.route.navigate(['/']);
  }

}

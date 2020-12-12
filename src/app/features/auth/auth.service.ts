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

  apiUrl = environment.apiUrl;
  // ------JwtHelperService------ //
    private helper = new JwtHelperService();


  TOKEN = 'token';
  infoUser: User;
  private refreshTokenTimeout;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): any{
    return this.http.post<any>(`${this.apiUrl}login`, { username, password })
            .pipe(map(token => {
              localStorage.setItem('currentUser', JSON.stringify(token));
              this.tokenInfo = this.getInfoToken(token.token);
              localStorage.setItem('currentUserInfo', JSON.stringify(this.tokenInfo));
              //console.log(this.getTokenExpiratinDate());
             // this.getCurrent();
              this.currentUserSubject.next(token);
              return true;
            })
    );
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

      return this.http.post<any>(`${environment.apiUrl}/token/refresh`,
      { refresh_token: this.currentUserValue.token }, { withCredentials: true })
          .pipe(map((user) => {
              this.currentUserSubject.next(user);
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
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer(): void {
      clearTimeout(this.refreshTokenTimeout);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { User } from 'src/app/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }


  login(username: string, password: string): any{


return this.http.post<any>(`${this.baseUrl}/login`, {username, password})
   .pipe(map(token => {

      localStorage.setItem('token', JSON.stringify(token));

    return 'revenu du  serveur';
})
);
// return this.http.get<any>("http://localhost:3001/profile");
  }



}

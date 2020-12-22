import { Profil } from './../../models/Profil';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = `${environment.apiUrl}admin/users`;
  constructor(private http: HttpClient) { }

  getUsers(page = 1, nbrItemPage = 5, profil= ''): Observable<User[]> {
    let URL = `${this.baseUrl}?page=${page}&itemsPerPage=${nbrItemPage}&archivage=false`;
    if ( profil ){
      URL = `${URL}&profil.libelle=${profil}`;
    }
    return this.http.get<User[]>(URL);
  }
  addUser(userData): Observable<any>{
    return this.http.post<any>(this.baseUrl, userData);
  }
  updateProfil(user: User): Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }
}

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

  getUserById(id: number): Observable<User>{
    const URL = `${this.baseUrl}/${id}`;

    return this.http.get<User>(URL);
  }
  addUser(userData): Observable<any>{
    return this.http.post<any>(this.baseUrl, userData);
  }
  updateUser(id: number, data: FormData): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/${id}`, data);
  }
  delete(id: number): any{
    const URL = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(URL);
  }
  deleteAppPS(id): any
  {
    const URL = `${environment.apiUrl}apprenants/${id}/profilsortie`;
    return this.http.delete<any>(URL);
  }

  getApprentLessPs(page = 1): Observable<any>
  {
    const URL = `${environment.apiUrl}apprenants?exists[profilSortie]=false&archivage=false&itemsPerPage=10&page=${page}`;
    return this.http.get<any>(URL);
  }
}

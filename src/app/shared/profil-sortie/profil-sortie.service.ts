import { User } from 'src/app/models/User';
import { ProfilSortie } from './profil-sortie';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {


  public currentPsSubject: BehaviorSubject<number>;
  baseUrl = `${environment.apiUrl}admin/profil_sorties`;
  constructor(private http: HttpClient) {
    this.currentPsSubject = new BehaviorSubject<number>(1);
  }

  getUsers( idPS, page = 1, nbrItemPage = 5): Observable<any> {
   // let URL = `${this.baseUrl}?page=${page}&itemsPerPage=${nbrItemPage}&archivage=false`;
    if ( idPS ){
      const URL = `${this.baseUrl}/${idPS}/apprenants?page=${page}&itemsPerPage=${nbrItemPage}`;
      return this.http.get<any>(URL);
    }
    return null;
  }
  getCurrentProfil(): Observable<number>{
    return this.currentPsSubject.asObservable();
  }

  getProfilSorties(): Observable<ProfilSortie[]> {
    return this.http.get<ProfilSortie[]>(this.baseUrl);
  }
  addProfilSortie(profil: ProfilSortie): Observable<ProfilSortie>{
    return this.http.post<ProfilSortie>(this.baseUrl, profil);
  }
  updateProfilSortie(profil: ProfilSortie): Observable<ProfilSortie>{
    return this.http.put<ProfilSortie>(`${this.baseUrl}/${profil.id}`, profil);
  }
}

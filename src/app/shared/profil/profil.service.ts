import { Observable, BehaviorSubject } from 'rxjs';
import { Profil } from './../../models/Profil';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  public currentProfilSubject: BehaviorSubject<string>;
  baseUrl = `${environment.apiUrl}admin/profils`;
  constructor(private http: HttpClient) {
    this.currentProfilSubject = new BehaviorSubject<string>('');
  }

  getCurrentProfil(): Observable<string>{
    return this.currentProfilSubject.asObservable();
  }

  getProfils(): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.baseUrl);
  }
  addProfil(profil: Profil): Observable<Profil>{
    return this.http.post<Profil>(this.baseUrl, profil);
  }
  updateProfil(profil: Profil): Observable<Profil>{
    return this.http.put<Profil>(`${this.baseUrl}/${profil.id}`, profil);
  }
}

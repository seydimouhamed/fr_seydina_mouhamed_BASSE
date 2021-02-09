import { Referentiel } from './../../models/Referentiel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {
baseUrl = `${environment.apiUrl}admin/referentiels`;
  constructor(private http: HttpClient) { }


  getReferentiels(): Observable<Referentiel[]>
  {
    return this.http.get<Referentiel[]>(this.baseUrl);
  }
  addReferentiel(referentiel): Observable<any>
  {
    return this.http.post<any>(this.baseUrl, referentiel);
  }
  getReferentiel(id: number): Observable<Referentiel>
  {
    return this.http.get<Referentiel>(`${this.baseUrl}/${id}`);
  }
}

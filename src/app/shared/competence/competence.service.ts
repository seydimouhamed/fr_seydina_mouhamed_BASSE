import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competence } from 'src/app/models/Competence';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
baseUrl = `${environment.apiUrl}admin/competences`;

  constructor(private http: HttpClient) { }

  getAll(page = 1, nbrItemPage = 5): Observable<Competence[]>{
    return this.http.get<Competence[]>(`${this.baseUrl}?page=${page}&itemsPerPage=${nbrItemPage}&archivage=false`);
   // return this.http.get<Competence[]>(`${this.baseUrl}?page=${page}&itemsPerPage=${nbrItemPage}&archivage=false`);
  }

  getAllCompetenceResume(): Observable<Competence[]>{
    return this.http.get<Competence[]>(`${this.baseUrl}/resume?itemsPerPage=100&archivage=false`);
  }

  getCompetenceById(idComptence): Observable<Competence>{
    return this.http.get<Competence>(`${this.baseUrl}/${idComptence}`);
  }

  addCompetence(data): Observable<Competence> {
    return this.http.post<Competence>(`${this.baseUrl}`, data);
  }
}

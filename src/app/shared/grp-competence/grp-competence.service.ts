import { environment } from './../../../environments/environment';
import { GrpCompetence } from './../../models/GrpCompetence';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrpCompetenceService {
baseUrl = `${environment.apiUrl}admin/grpecompetences`;
  constructor(private http: HttpClient) { }


  getAll(): Observable<GrpCompetence[]>
  {
    return this.http.get<GrpCompetence[]>(`${this.baseUrl}?archivage=false`);
  }

  getById(id: number): Observable<GrpCompetence>
  {
    return this.http.get<GrpCompetence>(`${this.baseUrl}/${id}?archivage=false`);
  }

  addGrpCompetence(data): Observable<any>
  {
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  delete(id: number): Observable<any>
  {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}

import { Promo } from 'src/app/models/Promo';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminPromoService {
  baseUrl = `${environment.apiUrl}admin/promos`;
  constructor(private http: HttpClient) { }

  getSumPromos(): Observable<Promo[]> {
    const URL = `${this.baseUrl}`;

    return this.http.get<Promo[]>(URL);
  }

  getPromoById(id: number): Observable<Promo>{
    const URL = `${this.baseUrl}/${id}`;
    return this.http.get<Promo>(URL);
  }

  // addUser(userData): Observable<any>{
  //   return this.http.post<any>(this.baseUrl, userData);
  // }
  // updateUser(id: number, data: FormData): Observable<any>{
  //   return this.http.post<any>(`${this.baseUrl}/${id}`, data);
  // }
  // delete(id: number): any{
  //   const URL = `${this.baseUrl}/${id}`;
  //   return this.http.delete<any>(URL);
  // }
}

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Promo } from 'src/app/models/Promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  baseUrl = `${environment.apiUrl}admin/promos`;
    constructor(private http: HttpClient) { }


    getPromos(): Observable<any[]>
    {
      return this.http.get<any[]>(this.baseUrl);
    }
    addPromo(promo): Observable<any>
    {
      return this.http.post<any>(this.baseUrl, promo);
    }
    getPromo(id: number): Observable<Promo>
    {
      return this.http.get<Promo>(`${this.baseUrl}/${id}`);
    }
    getPromoPrincipal(id: number): Observable<Promo>
    {
      return this.http.get<Promo>(`${this.baseUrl}/${id}/principal`);
    }
}

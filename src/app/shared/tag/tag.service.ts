import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from 'src/app/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
baseUrl = `${environment.apiUrl}admin/tags`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any>
  {
    return this.http.get<any>(this.baseUrl);
  }
}

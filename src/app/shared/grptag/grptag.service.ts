import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GrpTag } from 'src/app/models/GrpTag';

@Injectable({
  providedIn: 'root'
})
export class GrptagService {
private baseUrl = `${environment.apiUrl}admin/grptags`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<GrpTag[]> {
    return this.http.get<GrpTag[]>(this.baseUrl);
  }
}

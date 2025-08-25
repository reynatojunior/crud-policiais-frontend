
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policial } from '../models/policial.interface'

@Injectable({
  providedIn: 'root'
})
export class CrudPolicialService {
  private apiUrl = 'http://localhost:3006/policiais';

  constructor(private http: HttpClient) { }

  getPoliciais(): Observable<Policial[]> {
    return this.http.get<Policial[]>(this.apiUrl);
  }

  cadastrarPolicial(policial: Policial): Observable<Policial> {
    return this.http.post<Policial>(this.apiUrl, policial);
  }

  getPolicialById(id: number): Observable<Policial> {
    return this.http.get<Policial>(`${this.apiUrl}/${id}`);
  }

  atualizarPolicial(policial: Policial): Observable<Policial> {
    return this.http.patch<Policial>(`${this.apiUrl}/${policial.id}`, policial);
  }

  excluirPolicial(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}



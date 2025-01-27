import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JsonToCsvService {
  private apiUrl = 'http://localhost:5228/api/JsonToCsv';

  constructor(private http: HttpClient) {}

  convertJsonToCsv(jsonInput: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.apiUrl}/convert`, jsonInput, { headers });
  }
}

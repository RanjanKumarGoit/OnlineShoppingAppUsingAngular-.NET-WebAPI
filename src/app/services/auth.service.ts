import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7091/api/User';

  constructor(private http: HttpClient) {
  }

  login(params: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, params);
  }

  register(params: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, params);
  }

  myProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/my-profile`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

}

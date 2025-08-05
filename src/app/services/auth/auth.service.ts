import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface LoginResponse {
  message: string;
  result: {
    token: string;
  };
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.url_dev}`;

  constructor(private http: HttpClient) { }

  login(credentials: AuthCredentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/user/auth`, credentials).pipe(
      tap(response => {
        if (response.result.token) {
          console.log('if localstorage response login: ', response.result.token)
          localStorage.setItem('authToken', response.result.token);
        }
      })
    );
  }

  register(credentials: RegisterCredentials): Observable<any> {
    return this.http.post(`${this.apiUrl}/user`, credentials);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
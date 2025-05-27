import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  //Usar proxy para evitar CORS
  private apiUrl = "http://ec2-34-200-104-165.compute-1.amazonaws.com:53427/"

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
  const auth = btoa(`${username}:${password}`);
  const headers = new HttpHeaders({
    'Authorization': `Basic ${auth}`
  });

  return this.http.get<any>(this.apiUrl, {
    headers,
    withCredentials: false
  }).pipe(
    map((response: { user: { api_key: string; }; }) => {
      if (response?.user?.api_key) {
        localStorage.setItem('api_key', response.user.api_key);
        this.isLoggedInSubject.next(true);
        return true;
      }
      this.isLoggedInSubject.next(false);
      return false;
    }),
    catchError(err => {
      console.error('Error en login: ', err); // para ver errores reales
      this.isLoggedInSubject.next(false);
      return of(false);
    })
  );
}


  logout(): void {
    localStorage.removeItem('api_key');
    this.isLoggedInSubject.next(false);
  }

  getApiKey(): string | null {
    return localStorage.getItem('api_key');
  }
}

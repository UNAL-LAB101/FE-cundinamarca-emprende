import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'URL_DE_TU_API';  // Asegúrate de poner la URL de la API

  constructor(private http: HttpClient) { }

  // Obtener los datos para el dashboard
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

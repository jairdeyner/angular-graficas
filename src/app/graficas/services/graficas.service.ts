import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getDataUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData(): Observable<{ labels: string[]; data: number[] }> {
    return this.getDataUsuariosRedesSociales().pipe(
      map((data) => ({
        labels: Object.keys(data),
        data: Object.values(data),
      }))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {

  constructor(private http: HttpClient) { }

  public buscaPrevisao(cidade): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&appid=b5c5d01401e3c7726eddb4cd9dee0d69
    `);
  }
}

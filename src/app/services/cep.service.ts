import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

 public buscaCep(cep){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
